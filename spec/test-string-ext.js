describe("StringExtensions", function() {
  describe("wtf", function () {
    it("should be defined as a function", function () {
      expect(String.prototype.wtf).to.be.instanceof(Function);
    });

    it("should return 'wtf'", function() {
      var test_string = "Hello Dawg.";
      var result = test_string.wtf();

      expect(result).to.be.a("string");
      expect(result).to.equal("wtf");
    });
  }); //desc wtf

  // describe("forEveryItem", function () {
  //   it("should be defined as a function", function () {
  //     expect(String.prototype.forEveryItem).to.be.instanceof(Function);
  //   });

  //   it("should return an array resulting from calling the input function on every element of the invoking array", function() {
  //     var add_10 = function(elem) {return elem + 10;};
  //     test_string = [1,2,3,4,5];
  //     var result = test_string.forEveryItem(add_10);

  //     expect(result).to.be.an("array");
  //     expect(result).to.eql([11,12,13,14,15]);
  //   });
  // }); //desc forEveryItem

}); //desc ArrayExtensions