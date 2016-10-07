
var test = require('../js/script.js');

describe("pow variables", function() {
	var a  = test.pow();
	var n = test.pow();
	var c = ["a" ,"n"];
  it("contains variables", function() {
    expect(c).toContain("a");
    expect(c).toContain("n")
  });
});

describe('variables not undefined', function(){
	var a  = test.pow(5,7);
	var n = test.pow(8,2);
    it("a,n not undefined", function() {
    	expect(a).not.toBeUndefined();
    	expect(n).not.toBeUndefined();
    });
})


describe("pow", function() {
var myA = test.pow(8,2);
var myB= test.pow(3,0);
var myC = test.pow(0,5)

  it("testing pow results", function() {


    expect(myA).toBe(64);
    expect(myB).toBe(1);
    expect(myC).toBe(0)
  });
});




