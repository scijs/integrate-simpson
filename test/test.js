'use strict'

var simpson = require('../lib')
  , assert = require('chai').assert
  , richardson = require('richardson-extrapolation')

describe("simpson's rule integration", function() {

  it("integral of sin(x) from 0 to 2pi",function() {
    var value = simpson( Math.sin, 0, Math.PI, 3)
    assert.closeTo( value, 2, 1e-3, '~ 1')
  })

  it("integrates a constant exactly",function() {
    var value = simpson( function() { return 2 }, 1, 3, 1)
    assert.closeTo( value, 4, 0, '= 4')
  })

  it("integrates a line exactly",function() {
    var value = simpson( function(x) { return x }, 1, 3, 1)
    assert.closeTo( value, 4, 0, '= 4')
  })

  it("integrates a parabola exactly",function() {
    var value = simpson( function(x) { return x*x }, 1, 3, 1)
    assert.closeTo( value, 26/3, 0, '= 26/3')
  })

  it("integrates a cubic exactly",function() {
    var value = simpson( function(x) { return x*x*x - x*x }, 1, 3, 1)
    assert.closeTo( value, 34/3, 0, '= 34/3')
  })

  it("integrates a quartic approximately",function() {
    var value = simpson( function(x) { return x*x*x*x }, 1, 3, 1)
    assert.closeTo( value, 242/5, 1, '= 242/5')
  })

  it("acheives O(h^4) convergence",function() {
    var a = 0
    var b = Math.PI

    var result = richardson( function ( h ) {
      return simpson( Math.sin, a, b, Math.floor((b-a)/h+0.5))
    }, (b-a)/10, {f: 2} )

    assert.closeTo( result.n, 4, 1e-2, 'n ~ 4')
  })

})
