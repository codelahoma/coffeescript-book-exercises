(function() {
  var showAnswer, x;
  x = true;
  showAnswer = function(x) {
    if (x == null) {
      x = x;
    }
    return console.log(x ? "It works!" : "Nope");
  };
  showAnswer();
}).call(this);
