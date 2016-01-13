var expect  = require("expect")
var event   = require("./event.js")
var mouse   = require("../src/mouse.js")
var browser = require("../src/browser.js")

describe("mouse.js", function () {

    var target = browser.document.body
    it("emits mousemove events", function () {
        var m    = mouse()
        var test = undefined
        m.on("mousemove", function (e) {
            test = e
        })
        event.trigger(target, "mousemove", {
            x: 0,
            y: 0
        })
        expect(test.x).toEqual(0)
        expect(test.y).toEqual(0)
        m.removeAllListeners()
    })

    it("accepts list of events", function () {
        var m    = mouse(["testevent"]);
        var test = undefined;
        m.on("testevent", function (e) {
            test = e
        })
        event.trigger(target, "testevent", {
            x: 0,
            y: 0
        })
        expect(test.x).toEqual(0)
        expect(test.y).toEqual(0)
        m.removeAllListeners()
    })

    it("overrides default events", function () {
        var m    = mouse([]);
        var test = undefined;
        m.on("mousemove", function (e) {
            test = e
        })
        event.trigger(target, "mousemove", {
            x: 0,
            y: 0
        })
        expect(test).toNotExist()
        m.removeAllListeners()
    })

    it("custom target", function () {
        var m = mouse(browser.window)
        expect(browser.window).toNotBe(target)

        var test = undefined;
        m.on("mousemove", function (e) {
            test = e
        })
        event.trigger(browser.window, "mousemove", {
            x: 0,
            y: 0
        })
        expect(test.x).toEqual(0)
        expect(test.y).toEqual(0)
        m.removeAllListeners()
    })

})