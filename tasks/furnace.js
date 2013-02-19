
module.exports = function(grunt){

    var path = require('path');

    var filters = {
    
        'text>amd': function(src, dest){
            var text = grunt.file.read(src, { encoding: 'utf-8' });
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
            grunt.log.writeln( "File '" + dest + "' created." );
        }
    
    };

    grunt.registerMultiTask('furnace', 'transform code from one format to another', function(){
        var opt = this.options();
        this.files.forEach(function(file){
            file.src.forEach(function(src){
                var fn = filters[opt.importas.toLowerCase() + '>' + opt.exportas.toLowerCase()];
                if (fn) {
                    fn(src, file.dest);
                } else {
                    grunt.log.error('unsupported format: ' + opt.importas + ' > ' + opt.exportas);
                }
            });
        });
    });

};
