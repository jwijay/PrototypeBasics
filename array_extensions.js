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

  Array.prototype.contains = function(target) {
    return (this.indexOf(target) > -1);
  };

})();