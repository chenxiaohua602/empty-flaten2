'use strict';

function double_to_one(collection) {
  var b[], c = 0;
  for (var i = 0; i < collection.length; i++)
    for (var j = 0; j < collection[i].length; j++) {
      b[c] = collection[i][j];
      c++;
    }
  return b;}
  module.exports = double_to_one;
