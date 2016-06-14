'use strict';

function double_to_one(collection) {
  var newArr = traverse(collection);
  var result = judgmeng(newArr);
  return result;
}

function traverse(collection)
{
  var temp = [];

  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection[i].length; j++) {
      temp.push(collection[i][j]);
    }
  }
  return temp;
}

function judgmeng(temp)
{
  for (var i = 0; i < temp.length - 1; i++) {
    for (var j = i + 1; j < temp.length; j++) {
      if (temp[j] === temp[i]) {
        temp.splice(j, 1);
      }
    }
  }
  return temp;
}
module.exports = double_to_one;
