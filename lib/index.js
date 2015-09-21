"use strict";

var ngeohash = require('ngeohash')


module.exports = function (topLat, leftLon, botLat, rightLon, numberOfChars, on, done) {

  // defaults
  if (!numberOfChars) numberOfChars = 7
  if (!on) on = function () {}
  if (!done) done = function () {}

  var c_lat = topLat
  var c_lon = leftLon
  var row = 0
  var col = 0
  var current;

  while (c_lat > botLat) {
    var c_row_left = ngeohash.encode(c_lat, c_lon, numberOfChars)
    while (c_lon  < rightLon) {

      let _current = ngeohash.encode(c_lat, c_lon, numberOfChars)
      let _row = row
      let _col = col

      process.nextTick(function () {
        on({hash: _current, row: _row, col: _col})
      })

      current = ngeohash.neighbor(_current, [0,1])
      c_lon = ngeohash.decode(current).longitude
      col++
    }
    c_row_left = ngeohash.neighbor(c_row_left, [-1,0])
    c_lat = ngeohash.decode(c_row_left).latitude
    c_lon = ngeohash.decode(c_row_left).longitude
    row++
    col = 0

  }
  done()
}
