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

  describe("seals", function () {
    it("should be defined as a function", function () {
      expect(Array.prototype.seals).to.be.instanceof(Function);
    });

    it("should replace every element of invoking array with a seal", function() {
      test_array = [1,2,3,4,5];
      var result = test_array.seals();

      expect(result).to.be.an("array");
      expect(result).to.eql(["ᶘ ᵒᴥᵒᶅ","ᶘ ᵒᴥᵒᶅ","ᶘ ᵒᴥᵒᶅ","ᶘ ᵒᴥᵒᶅ","ᶘ ᵒᴥᵒᶅ"]);
    });
  }); //desc seals

  describe("first", function() {
    it("should be defined as a function", function(){
      expect(Array.prototype.first).to.be.instanceof(Function);
    });

    it("should return the first element of the invoking array", function() {
      var test_array = [1,2,3,4];
      var result = test_array.first();

      expect( result ).to.equal( 1 );
    });

    it("should return an array with the first n elements of the invoking array", function() {
      var test_array = [1,2,3,4];
      var result2 = test_array.first( 2 );
      expect( result2 ).to.eql([1,2]);

      var result3 = test_array.first( 3 );
      expect( result3 ).to.eql( [1,2,3] );
    });
  }); //desc first

  describe("max", function() {
    it("should be defined as a function", function(){
      expect(Array.prototype.max).to.be.instanceof(Function);
    });

    it("should return the maximum value of the invoking array", function() {
      var test_array = [1,2,3,4];
      var result2 = test_array.max();
      expect( result2 ).to.equal(4);
    });

    it("should return -Infinity if the invoking array is empty", function() {
      var test_array = [];
      var result2 = test_array.max();
      expect( result2 ).to.equal(-Infinity);
    });
  }); //desc max

  describe("min", function() {
    it("should be defined as a function", function(){
      expect(Array.prototype.min).to.be.instanceof(Function);
    });

    it("should return the minimum value of the invoking array", function() {
      var test_array = [1,2,3,4];
      var result2 = test_array.min();
      expect( result2 ).to.equal(1);
    });

    it("should return Infinity if the invoking array is empty", function() {
      var test_array = [];
      var result2 = test_array.min();
      expect( result2 ).to.equal(Infinity);
    });
  }); //desc min

  describe("contains", function() {
    it("should be defined as a function", function(){
      expect(Array.prototype.contains).to.be.instanceof(Function);
    });

    it("should return true if target is present in the invoking array, and false otherwise.", function() {
      var test_array = [1,2,3];
      var result = test_array.contains( 1 );
      expect( result ).to.be.true();

      var result2 = test_array.contains( 44 );
      expect( result2 ).to.be.false();
    });
  }); //desc contains

}); //desc ArrayExtensions