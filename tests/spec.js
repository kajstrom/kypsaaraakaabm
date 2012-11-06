describe("Test for weight calculation", function() {
  it("should handle basic calculation", function() {
    expect(rawWeightCalculator.calculate(100, 80, 20)).toBe(25);
  });
  it("decimal results should be rounded up", function() {
  	expect(rawWeightCalculator.calculate(300, 200, 75)).not.toBe(112.5);
  	expect(rawWeightCalculator.calculate(300, 200, 75)).toBe(113);
  });
});