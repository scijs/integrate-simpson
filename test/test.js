'use strict';

var simpson = require('../lib');
var assert = require('chai').assert;

describe("simpson's rule integration", function() {

  it("integral of sin(x) from 0 to 2pi",function() {
    var value = simpson( Math.sin, 0, Math.PI, 3)
    assert.closeTo( value, 2, 1e-3, '~ 1')
  });

  it("integrates a constant exactly",function() {
    var value = simpson( function() { return 2 }, 1, 3, 1)
    assert.closeTo( value, 4, 0, '= 4')
  });

  it("integrates a line exactly",function() {
    var value = simpson( function(x) { return x }, 1, 3, 1)
    assert.closeTo( value, 4, 0, '= 4')
  });

  it("integrates a parabola exactly",function() {
    var value = simpson( function(x) { return x*x }, 1, 3, 1)
    assert.closeTo( value, 26/3, 0, '= 26/3')
  });

  it("integrates a cubic exactly",function() {
    var value = simpson( function(x) { return x*x*x - x*x }, 1, 3, 1)
    assert.closeTo( value, 34/3, 0, '= 34/3')
  });

  it("integrates a quartic approximately",function() {
    var value = simpson( function(x) { return x*x*x*x }, 1, 3, 1)
    assert.closeTo( value, 242/5, 1, '= 242/5')
  });

});
