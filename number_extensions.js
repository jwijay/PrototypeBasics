(function () {
  Number.prototype.double = function () {
    return this*2;
  };

  Number.prototype.tripledouble = function() {
    return this*3*2;
  };

  Number.prototype.isDivisibleBy = function(divisor) {
    return (this % divisor === 0);
  };

  applyOperation = function(choice, a, b) {
    switch (choice) {
      case 0:
        return a + b;
      case 1:
        return a - b;
      case 2:
        return a * b;
      case 3:
        return a / b;
    }
  };

  Number.prototype.submultitractivide = function(number) {
    var choice1 = Math.floor(Math.random()*4);
    var choice2 = Math.floor(Math.random()*4);

    var result = applyOperation(choice1, this, number);
    result = applyOperation(choice2, result, number);

    return result;
  };

})();