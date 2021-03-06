
module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        meta: {
        },

        furnace: {
            tpl2amd: {
                options: {
                    importas: 'tpl',
                    exportas: 'amd',
                },
                files: [{
                    expand: true,
                    cwd: 'tests/tpl/',
                    src: ['*.tpl'],
                    dest: 'tests/tpl/amd_dest/',
                    ext: '.js'
                }]
            },
            tpl2cjs: {
                options: {
                    importas: 'tpl',
                    exportas: 'cjs',
                },
                files: [{
                    expand: true,
                    cwd: 'tests/tpl/',
                    src: ['*.tpl'],
                    dest: 'tests/tpl/cjs_dest/',
                    ext: '.js'
                }]
            },
            amd2cjs: {
                options: {
                    importas: 'amd',
                    exportas: 'cjs',
                },
                files: [{
                    expand: true,
                    cwd: 'tests/amd/',
                    src: ['**/*.js', '!dest/**/*.js'],
                    dest: 'tests/amd/dest/',
                    ext: '.js'
                }]
            },
            cjs2amd: {
                options: {
                    importas: 'cjs',
                    exportas: 'amd',
                },
                files: [{
                    expand: true,
                    cwd: 'tests/cjs/',
                    src: ['**/*.js', '!dest/**/*.js'],
                    dest: 'tests/cjs/dest/',
                    ext: '.js'
                }]
            }
        },

        clean: {
            tests: ['tests/**/dist/**']
        },

        jshint: {
            options: {
                // Settings
                "passfail": false,             // Stop on first error.
                // Env
                "browser": true,               // Standard browser globals e.g. `window`, `document`.
                "nonstandard": true,
                "node": true,
                "globals": {
                    "ActiveXObject": true,
                    "require": true,
                    "define": true,
                    "module":true
                },
                // Development.
                "devel": false,                // Allow developments statements e.g. `console.log();`.
                "debug": false,                // Allow debugger statements e.g. browser breakpoints.
                // ECMAScript 5.
                "es5": true,                   // Allow ECMAScript 5 syntax.
                "strict": false,               // Require `use strict` pragma in every file.
                "esnext": false,               // tells JSHint that your code uses ES.next specific features such as const and let
                // The Good Parts.
                "eqeqeq": false,               // prohibits the use of == and != in favor of === and !==
                "eqnull": true,                // Tolerate use of `== null`.
                "immed": true,                 // Require immediate invocations to be wrapped in parens e.g. `( function(){}() );`
                "noarg": true,                 // Prohibit use of `arguments.caller` and `arguments.callee`.
                "undef": true,                 // Require all non-global variables be declared before they are used.
                "unused": true,                // warns when you define and never use your variables.
                "trailing": false,             // makes it an error to leave a trailing whitespace in your code
                "boss": true,                  // Tolerate assignments inside if, for & while. Usually conditions & loops are for comparison, not assignments.
                "evil": true,                  // Tolerate use of `eval`.
                "shadow": true,                // suppresses warnings about variable shadowing i.e. declaring a variable that had been already declared somewhere in the outer scope.
                "proto": true,                 // suppresses warnings about the __proto__ property
                "validthis": true,             // suppresses warnings about possible strict violations when the code is running in strict mode and you use this in a non-constructor function
                // Personal styling preferences.
                "indent": 4,                   // Specify indentation spacing
                "asi": false,                  // suppresses warnings about missing semicolons
                "laxbreak": true,              // Tolerate unsafe line breaks e.g. `return [\n] x` without semicolons.
                "laxcomma": true,              // suppresses warnings about comma-first coding style
                "curly": false,                 // Require {} for every new block or scope.
                "nonew": true,                 // Prohibit use of constructors for side-effects.
                "sub": true,                   // Tolerate all forms of subscript notation besides dot notation e.g. `dict['key']` instead of `dict.key`.
                "loopfunc": true,              // suppresses warnings about functions inside of loops.
                "regexdash": true,             // suppresses warnings about unescaped - in the end of regular expressions
                "white": false,                // Check against strict whitespace and indentation rules.
                "scripturl": true,             // Tolerate script-targeted URLs.
                "multistr": true               // suppresses warnings about multi-line strings
            },
            main: ['task/**/*.js', '*.js']
        }

    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['jshint', 'clean', 'furnace']);

};

