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

  describe("scramble", function () {
    it("should be defined as a function", function () {
      expect(String.prototype.scramble).to.be.instanceof(Function);
    });

    it("should return invoking string in a mixed up order", function() {
      var test_string = "Hello Dawg.";
      var result = test_string.scramble();

      expect(result).to.be.a("string");
      expect(result).to.have.length(test_string.length);
      expect(result).to.not.equal(test_string);
    });
  }); //desc scramble

  describe("trim", function () {
    it("should be defined as a function", function () {
      expect(String.prototype.trim).to.be.instanceof(Function);
    });

    it("should return invoking string with leading and trailing whitespaces removed", function() {
      var test_string = "  Hello Dawg.  ";
      var result = test_string.trim();

      expect(result).to.be.a("string");
      expect(result).to.equal("Hello Dawg.");
    });
  }); //desc trim

}); //desc ArrayExtensions