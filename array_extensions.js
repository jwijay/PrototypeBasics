(function () {
  Array.prototype.toString = function () {
    //toString takes the contents of the array, and returns the string of the contents of that array, but should check for functions and null/exclude them from the returned value.
    var result = "";
    for (var i = 0; i < this.length; i++) {
      if (typeof(this[i]) !== 'function') {
        result += this[i] + ", ";
      }
    }
    return result.slice(0,-2);
  };

  Array.prototype.forEveryItem = function (cb) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
      result.push(cb(this[i]));
    }
    return result;
  };

  Array.prototype.flatten = function (result) {
    for (var i = 0; i < this.length; i++) {
      if (Array.prototype.isArray(this[i])) {
        result = this[i].Array.prototype.flatten(result);
      } else {
        result = result.concat(this[i]);
      }
    }
    return result;
  };

  Array.prototype.seals = function () {
    return this.map(function(){return "ᶘ ᵒᴥᵒᶅ";});
  };

  Array.prototype.first = function( n ) {
    //if n is specified, return first n elements
    if (n === undefined) {
      return this[0];
    } else {
      return this.slice(0,n);
    }
  };

  Array.prototype.max = function() {
    //retrieve the maximum value of a collection
    if (this.length > 0) {
      return this.reduce(function(a, b) {
        return a > b? a : b;
      });  
    } else {
      return -Infinity;
    }
  };

  Array.prototype.min = function () {
    if (this.length > 0) {
      return this.reduce(function(a, b) {
        return a < b? a : b;
      });  
    } else {
      return Infinity;
    }
  };

  Array.prototype.intersection =  function() {
    //need to convert the object of a variable num of arrays (arguments) into an array
    var args = Array.prototype.slice.call(arguments);

    //need to add invoking array to front of args (so we can check intersecting elements of the invoking array as well)
    args.unshift(this);

    var intersecting = args.reduce(function(arrayA,arrayB) {
      var result = [];
      for (var i = 0; i < arrayA.length; i++) {
        //check if each element is present in arrayB
        if (arrayB.indexOf(arrayA[i]) > -1) {
          result.push(arrayA[i]);
        }
      }
      return result;
    });
    return intersecting;
  };

  //difference takes in a variable number of arrays, and returns an array of the unique values of the first array, when compared to all following array arguments)
  Array.prototype.difference = function() {
    var args = Array.prototype.slice.call(arguments);

    //we want to perform the difference operation to our invoking array as well, so prepend it.
    args.unshift(this);

    var uniqueValuesOfFirst = args.reduce(function(arrayA,arrayB){
      var result = [];
      for (var i = 0; i < arrayA.length; i++) {
        //check if each element is NOT present in arrayB
        if (arrayB.indexOf(arrayA[i]) === -1) {
          result.push(arrayA[i]);
        }
      }
      return result;
    });
    return uniqueValuesOfFirst;
  };

  Array.prototype.uniq = function() {
    var unique = [];

    var args = Array.prototype.slice.call(arguments);

    //we want to perform the difference operation to our invoking array as well, so prepend it.
    args.unshift(this);

    var smushed = args.reduce(function(a,b) {
      return a.concat(b);
    });

    unique = smushed.filter(function (value, index, self) { 
      return self.indexOf(value) === index;
    });

    //at this point, sorting may be necessary (test cases do not sort unique's results)
    return unique;
  };

  Array.prototype.contains = function(target) {
    return (this.indexOf(target) > -1);
  };

})();