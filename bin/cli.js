#!/usr/bin/env node

var grid = require('../lib/index')

var on = function(data) {
  console.log(JSON.stringify(data))
}
var res = grid(
  Number(process.argv[2]),
  Number(process.argv[3]),
  Number(process.argv[4]),
  Number(process.argv[5]),
  7,
  on
)
