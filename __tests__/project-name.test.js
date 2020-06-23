import { getFibSum, addMultiples } from './../src/main.js';

describe('getFibSum', ()  => {
  test('should return sum of even numbers that are fibonacci numbers per project euler prompt' , () => {
    expect(getFibSum(35)).toEqual(4613732)
  });
});

describe("addMultiples", () => {

  test("should return sum of multiples of 3 and 5 up to 1000", () => {

    expect(addMultiples(1001)()(3, 5)()).toEqual(234168);
  });
});