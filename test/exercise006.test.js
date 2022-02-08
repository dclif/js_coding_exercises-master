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
    test(""), () => {
      expect(isValidDNA("CGTA")).toBe(true);
      expect(isValidDNA("CGTAA")).toBe(true);
      expect(isValidDNA("CGTAb")).toBe(false);
    }
  })

  describe("getComplementaryDNA", () => {
    test(""), () => {
      expect(getComplementaryDNA("CGTA")).toBe("ATCG");
      expect(getComplementaryDNA("CGTACGTA")).toBe("ATATCGCG");
      expect(getComplementaryDNA("CGTAA")).toBe("Cannot form valid base pairs from input");
      expect(getComplementaryDNA("CGTAb")).toBe("Cannot form valid base pairs from input");
    }
  })

  describe("isItPrime", () => {
    test(""), () => {
      expect(isItPrime(7)).toBe(true)
      expect(isItPrime(1)).toBe(false)
      expect(isItPrime(21)).toBe(false)
    }
  })

  describe("createMatrix", () => {
    test(""), () => {
      expect(createMatrix(3, "foo")).toBe([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
      expect(createMatrix(1, "shabba")).toBe([["shabba"]]);
    }
  })

  describe("areWeCovered", () => {
    test(""), () => {
      expect(areWeCovered([
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
         { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        ], "Tuesday")).toBe(false)
        expect(areWeCovered([
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
           { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }, { name: "Rudolph", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
          ], "Tuesday")).toBe(false)
    }
  })