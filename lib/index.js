'use strict'

module.exports = Integrator

function Integrator( f, a, b, n ) {
  var i, x, n2=n*2, h=(b-a)/n2
  var sum = f(a) + f(b)

  for(i=1; i<n2; i+=2)
    sum += 4*f(a + i*h)

  for(i=2; i<n2-1; i+=2)
    sum += 2*f(a + i*h)

  return sum * h / 3

}
