(function () {
  String.prototype.wtf = function () {
    //toString takes the contents of the array, and returns the string of the contents of that array, but should check for functions and null/exclude them from the returned value.
    return "wtf";
  };

})();