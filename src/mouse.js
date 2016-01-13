var EventEmitter = require("events").EventEmitter
var util         = require("util")
var browser      = require("./browser")

module.exports             = mouse
browser.window.mouseevents = mouse

function mouse(target) {
    return new Mouse(target)
}

function Mouse(target, events) {
    EventEmitter.call(this)
    var that = this
    if (target && target.constructor === Array) {
        events = target;
        target = null;
    }
    target = target || browser.document.body
    events = events || [
            "mousedown",
            "mousemove",
            "mouseup",
            "wheel"
        ]

    for (var i = 0; i < events.length; i++) {
        (function (eventName) {
            target.addEventListener(eventName, function (event) {
                that.emit(eventName, event)
            })
        })(events[i])
    }

}
util.inherits(Mouse, EventEmitter)