# integrate-simpson [![Build Status](https://travis-ci.org/scijs/integrate-simpson.svg)](https://travis-ci.org/scijs/integrate-simpson) [![npm version](https://badge.fury.io/js/integrate-simpson.svg)](http://badge.fury.io/js/integrate-simpson) [![Dependency Status](https://david-dm.org/scijs/integrate-simpson.svg)](https://david-dm.org/scijs/integrate-simpson)

> Integrate a function of one variable using Simpson's Rule


## Introduction

This module computes the integral <p align="center"><img alt="undefined" valign="middle" src="images/int_ab-fx-dx-a1ac3b24ed.png" width="99.5" height="54.5"></p> using Simpson's method that approximates the function with quadratic segments using the summation <p align="center"><img alt="undefined" valign="middle" src="images/int_ab-fxdx-approx-frach3left-f-x_0-2sum-limi-c435a73a06.png" width="581.5" height="76"></p> where <img alt="undefined" valign="middle" src="images/x_j-a-jh-c4411ea4b9.png" width="106.5" height="24"> for <img alt="undefined" valign="middle" src="images/j-0-1-ldots-n-1-n-4d4d39360d.png" width="180.5" height="21"> with <img alt="undefined" valign="middle" src="images/hb-an-888d0e1087.png" width="123" height="24">.

## Install

```bash
$ npm install integrate-simpson
```

## Example

```javascript
var simpson = require('integrate-simpson')

// Integrate sin(x) from 0 to 1 using ten intervals
simpson( Math.sin, 0, 1, 10 )
// => 2.000006784441801
```

## API

### `require('integrate-simpson')( f, a, b, n )`
**Arguments:**
- `f`: The function to be integrated. A function of one variable that returns a value.
- `a`: The lower limit of integration, <img alt="undefined" valign="middle" src="images/a-a1c2708a7a.png" width="15" height="13">.
- `b`: The upper limit of integration, <img alt="undefined" valign="middle" src="images/b-5891343d52.png" width="13" height="18">.
- `n`: The number of intervals, equal to the number of quadratic segments. Results in <img alt="undefined" valign="middle" src="images/2n-1-a1fe97f480.png" width="60.5" height="18.5"> function evaluations.

**Returns**:
The value of the integral

## Credits

(c) 2015 Ricky Reusser. MIT License