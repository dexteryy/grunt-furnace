<!---
layout: intro
title: grunt-furnace
-->

# grunt-furnace

Grunt tasks for transforming code from one format to another

Support: 

* template > AMD
* AMD > CJS _(comming soon...)_
* CJS > AMD _(comming soon...)_
* module pattern > AMD _(comming soon...)_
* AMD > module pattern _(comming soon...)_

## Config Example

``` javascript
furnace: {
    tplExample1: {
        options: {
            importas: 'text',
            exportas: 'amd',
        },
        src: 'tpl/**/*.tpl',
        dest: 'js/app/tpl/'
    },
    tplExample2: {
        options: {
            importas: 'text',
            exportas: 'amd',
        },
        files: [{
            expand: true,     // Enable dynamic expansion.
            cwd: 'tpl/',
            src: ['**/*.tpl'], // Actual pattern(s) to match.
            dest: 'js/app/',   // Destination path prefix.
            ext: '.tpl.js'
        }]
    }
},
```

## Source code

* [View on Github](https://github.com/dexteryy/grunt-furnace)

## More References

See [OzJS References](http://ozjs.org/#ref)

## Release History

See [OzJS Release History](http://ozjs.org/#release)

## License

Copyright (c) 2010 - 2013 dexteryy  
Licensed under the MIT license.

