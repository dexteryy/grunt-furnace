
module.exports = function(grunt){

    var path = require('path');

    var filters = {
    
        'tpl>amd': function(src, dest){
            var text = grunt.file.read(src);
            var json = {
                'template': text.toString()
            };
            var INDENT = '    ';
            var code = 'define([], function(){\n\n' 
                + INDENT + 'return ' 
                + JSON.stringify(json)
                + '; \n\n});';
            if (grunt.file.isDir(dest)) {
                dest = path.join(dest, path.basename(src).replace(/\..+?$/, '.js'));
            }
            grunt.file.write(dest, code);
            return dest;
        },

        'tpl>cjs': function(src, dest){
            return filters['amd>cjs'](
                filters['tpl>amd'](src, dest), 
                dest
            );
        },

        'amd>cjs': function(src, dest){
            var amd_code = grunt.file.read(src);
            var nodefy = require('nodefy');
            var cjs_code = '(function(){\n' 
                + nodefy.parse(amd_code)
                + '\n})();';
            if (grunt.file.isDir(dest)) {
                dest = path.join(dest, path.basename(src).replace(/\..+?$/, '.js'));
            }
            grunt.file.write(dest, cjs_code);
            return dest;
        },

        'cjs>amd': function(src, dest){
            var cjs_code = grunt.file.read(src);
            var amd_code = 'define(function(require, exports, module){\n' 
                + cjs_code
                + '\n});';
            if (grunt.file.isDir(dest)) {
                dest = path.join(dest, path.basename(src).replace(/\..+?$/, '.js'));
            }
            grunt.file.write(dest, amd_code);
            return dest;
        }
    
    };

    grunt.registerMultiTask('furnace', 'transform code from one format to another', function(){
        var opt = this.options();
        this.files.forEach(function(file){
            file.src.forEach(function(src){
                var fn = filters[opt.importas.toLowerCase() + '>' + opt.exportas.toLowerCase()];
                if (fn) {
                    var dest = fn(src, file.dest);
                    grunt.log.writeln( "File '" + dest + "' created." );
                } else {
                    grunt.log.error('unsupported format: ' + opt.importas + ' > ' + opt.exportas);
                }
            });
        });
    });

};
