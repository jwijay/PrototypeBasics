(function () {
  String.prototype.wtf = function () {
    //toString takes the contents of the array, and returns the string of the contents of that array, but should check for functions and null/exclude them from the returned value.
    return "wtf";
  };

  String.prototype.scramble = function() {
    var halfsies = 0.5;
    return this.split("").sort(function() {
      return halfsies > Math.random();
    }).join("");
  };

  //http://stackoverflow.com/questions/10032024/how-to-remove-leading-and-trailing-white-spaces-from-a-given-html-string
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
  };

  String.prototype.assWord = function() {
    return "(_!_) " + this;
  };
  
})();