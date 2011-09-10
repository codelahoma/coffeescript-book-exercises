(function() {
  var what, xInContext;
  xInContext = function() {
    return console.log(this.x);
  };
  what = {
    x: 'quantum entanglement'
  };
  xInContext.call(what);
}).call(this);
