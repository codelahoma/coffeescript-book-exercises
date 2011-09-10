(function() {
  var clearArray, r, testArray;
  clearArray = function(arr) {
    arr.splice(0, arr.length);
  };
  testArray = [1, 2, 3, 4];
  r = clearArray(testArray);
  console.log(r);
}).call(this);
