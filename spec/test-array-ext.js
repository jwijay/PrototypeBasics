describe("ArrayExtensions", function() {
  describe("toString", function () {
    it("should be defined as a function", function () {
      expect(Array.prototype.toString).to.be.instanceof(Function);
    });

    it("should return string of array's contents (excluding any functions)", function() {
      var test_array = [1,2,3,4,"a",function() {console.log("Hello World.");}];
      var result = test_array.toString();

      expect(result).to.be.a("string");
      expect(result).to.eql("1, 2, 3, 4, a");
    });
  }); //desc toString

  describe("forEveryItem", function () {
    it("should be defined as a function", function () {
      expect(Array.prototype.forEveryItem).to.be.instanceof(Function);
    });

    it("should return an array resulting from calling the input function on every element of the invoking array", function() {
      var add_10 = function(elem) {return elem + 10;};
      test_array = [1,2,3,4,5];
      var result = test_array.forEveryItem(add_10);

      expect(result).to.be.an("array");
      expect(result).to.eql([11,12,13,14,15]);
    });
  }); //desc forEveryItem

}); //desc ArrayExtensions