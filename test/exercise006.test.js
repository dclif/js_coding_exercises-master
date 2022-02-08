const {
    sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
  } = require("../challenges/exercise006");

  describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
      expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
      expect(sumMultiples([5, 3, 7, 8, 1, 10,9, 15])).toBe(42);
      expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
    });
  });

  describe("isValidDNA", () => {
    test("returns true/false depending on whether it is a valid DNA string", () => {
      expect(isValidDNA("CGTA")).toBe(true);
      expect(isValidDNA("CGTAA")).toBe(true);
      expect(isValidDNA("CGTAb")).toBe(false);
    })
  });

  describe("getComplementaryDNA", () => {
    test("returns a string of the complementary base pairs, either AT or CG", () => {
      expect(getComplementaryDNA("CGTA")).toBe("ATCG");
      expect(getComplementaryDNA("CGTACGTA")).toBe("ATATCGCG");
      expect(getComplementaryDNA("CGTAA")).toBe("Cannot form valid base pairs from input");
    })
  });

  describe("isItPrime", () => {
    test("returns true/false depending on whether it is a prime number or not", () => {
      expect(isItPrime(7)).toBe(true)
      expect(isItPrime(1)).toBe(false)
      expect(isItPrime(21)).toBe(false)
    })
  })

  describe("createMatrix", () => {
    test("returns an array of n arrays, each filled with n items", () => {
      expect(createMatrix(3,"foo")).toEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]])
      expect(createMatrix(1, "ShAbBa")).toEqual([["ShAbBa"]])
    })
  })

  describe("areWeCovered", () => {
    test("return true/false depending on whether three staff available on the given input day", () => {
      expect(areWeCovered([
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
         { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        ], "Tuesday")).toBe(false)
        expect(areWeCovered([
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
           { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }, { name: "Rudolph", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
          ], "Tuesday")).toBe(true)
    })
  })