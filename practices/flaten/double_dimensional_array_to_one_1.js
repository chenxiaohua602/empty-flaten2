'use strict';

function double_to_one(collection) {
  var b = [];
  var c = 0;
  for (var i = 0; i < collection.length; i++)
    if(collection[i].length)
      for (var j = 0; j < collection[i].length; j++) {
      b[c] = collection[i][j];
      c++;
    }
    else
    {
      b[c] = collection[i];
      c ++;
    }
  return b;}
  module.exports = double_to_one;
