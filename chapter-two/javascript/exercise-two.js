(function() {
  var run, test;
  var __slice = Array.prototype.slice;
  run = function() {
    var args, fn;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return fn.apply(this, args);
  };
  test = function() {
    var arr;
    arr = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return console.log(arr);
  };
  run(test, 1, 2, 3);
}).call(this);
