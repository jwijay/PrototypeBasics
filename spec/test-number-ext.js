describe("NumberExtensions", function() {
  describe("double", function () {
    it("should be defined as a function", function () {
      expect(Number.prototype.double).to.be.instanceof(Function);
    });

    it("should return the doubled value of invoking Number", function() {
      var test_number = 42;
      var result = test_number.double();

      expect(result).to.be.a("Number");
      expect(result).to.equal(84);
    });
  }); //desc double

  describe("tripledouble", function () {
    it("should be defined as a function", function () {
      expect(Number.prototype.tripledouble).to.be.instanceof(Function);
    });

    it("should return the tripled and doubled value (i.e. 6 times the value) of the invoking Number", function() {
      var test_number = 42;
      var result = test_number.tripledouble();

      expect(result).to.be.a("Number");
      expect(result).to.equal(252);
    });
  }); //desc tripledouble

  describe("isDivisibleBy", function () {
    it("should be defined as a function", function () {
      expect(Number.prototype.isDivisibleBy).to.be.instanceof(Function);
    });

    it("should return boolean value for whether or not invoking Number is evenly divisible by input number", function() {
      var test_number = 42;
      var divisor1 = 3;
      var divisor2 = 11;
      var result1 = test_number.isDivisibleBy(divisor1);
      var result2 = test_number.isDivisibleBy(divisor2);

      expect(result1).to.be.a("boolean");
      expect(result1).to.be.true();

      expect(result2).to.be.a("boolean");
      expect(result2).to.be.false();
    });
  }); //desc isDivisibleBy

   describe("submultitractivide", function () {
    it("should be defined as a function", function () {
      expect(Number.prototype.submultitractivide).to.be.instanceof(Function);
    });

    it("should return the number result of performing 2 random math operations (either +, -, /, *) on the invoking number and the input number", function() {
      var test_number = 42;
      var result = test_number.submultitractivide(7);

      expect(result).to.be.a("Number");
    });
  }); //desc submultitractivide

}); //desc ArrayExtensions