# mouse-events
![](http://img.shields.io/npm/v/mouse-events.svg?style=flat)
![](http://img.shields.io/npm/dm/mouse-events.svg?style=flat)
![](http://img.shields.io/npm/l/mouse-events.svg?style=flat)

Provides access to mouse events for developers using Node.js for browsers.

## Usage

[![NPM](https://nodei.co/npm/mouse-events.png)](https://nodei.co/npm/mouse-events/)

### `mouse = mouseevents()`

## Example

    var mouse = window.mouseevents(document) // Default target is `document.body`
    mouse.on("mousedown", function(mouseEvent) {
        // ...
    })
    
## Default Events

- mousemove
- mouseup
- mousedown
- wheel

## Tests

- Mocha
   - Test functionality in Node.js
- Karma
   - Using browserify, test functionality in browsers
- User Testing
   - `npm run-script user-test` is set to build, serve, and open [test/index.html](test/index.html)