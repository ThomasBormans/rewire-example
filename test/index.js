var expect = require("chai").expect;
var rewire = require("rewire");

var app = rewire("../app.js");
var internal = app.__get__('internal');

describe("App tester", function() {
    it("Test external function", function(done) {
        var result = app.external();
        expect(result).to.be.a("number");
        expect(result).to.be.above(10);
        expect(result).to.be.below(21);
        done();
    });

    it("Test internal function", function(done) {
        var result = internal();
        expect(result).to.be.a("number");
        expect(result).to.be.above(0);
        expect(result).to.be.below(11);
        done();
    });
});
