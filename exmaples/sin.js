var simpson = require('../lib')

// Integrate sin(x) from 0 to pi using ten intervals
console.log( simpson( Math.sin, 0, Math.PI, 10 ) )
// => 2.000006784441801
