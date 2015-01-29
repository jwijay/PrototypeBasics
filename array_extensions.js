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

})();