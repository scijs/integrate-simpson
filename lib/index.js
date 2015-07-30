'use strict'

module.exports = Integrator

function Integrator( f, x1, x2, steps ) {
  var i, x, xa, h=(x2-x1)/steps
  var sum = 0.5*(f(x1) + f(x2))

  for(i=0, xa=x1+0.5*h; i<steps; i++)
    sum += 2*f(xa + i*h)

  for(i=1; i<steps; i++)
    sum += f(x1 + i*h)

  return sum * h / 3

}
