<!---
layout: intro
title: grunt-furnace
-->

# grunt-furnace

> * Grunt tasks for transforming code from one format to another

## Support 

* [TPL]() > [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) - Use JS template file as AMD module no matter what syntax 
* TPL > [CJS](http://wiki.commonjs.org/wiki/Modules/1.1) - Use JS template file as CommonJS module no matter what syntax
* AMD > CJS - Make available AMD module in NodeJS or publish AMD module through NPM
* CJS > AMD - Use [Component](https://github.com/component/component/wiki/Components)-based module in your OzJS-based or RequireJS-based project 
* AMD > module pattern _(comming soon...)_

## Config Example

``` javascript
furnace: {
    tplExample: {
        options: {
            importas: 'tpl',
            exportas: 'amd',
        },
        src: 'tpl/**/*.tpl',
        dest: 'js/app/tpl/'
    },
    npmExample: {
        options: {
            importas: 'amd',
            exportas: 'cjs',
        },
        files: [{
            expand: true,
            cwd: './',
            src: ['**/*.js', '!<%= meta.npmPublishDir %>/**', '!node_modules/**', 'Gruntfile.js'],
            dest: '<%= meta.npmPublishDir %>/',
            ext: '.js'
        }]
    }
},
```

See [Gruntfile.js](https://github.com/dexteryy/grunt-furnace/blob/master/Gruntfile.js) and [tests/](https://github.com/dexteryy/grunt-furnace/blob/master/tests) for more examples.

## Source code

* [View on Github](https://github.com/dexteryy/grunt-furnace)

## More References

See [OzJS Project Homepage](http://ozjs.org/)

## Release History

See [OzJS Release History](http://ozjs.org/#release)

## License

Copyright (c) 2010 - 2013 dexteryy  
Licensed under the MIT license.

