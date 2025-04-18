import { DrugStrategy } from "./drug.strategy";

describe("DrugStrategy", () => {
  let drugStrategy;

  beforeEach(() => {
    drugStrategy = new DrugStrategy();
  });

  describe("applyCommonRules", () => {
    it("should not modify benefit if it is within range (0-50)", () => {
      const props = { benefit: 25 };
      const result = drugStrategy.applyCommonRules(props);
      expect(result).toEqual(props);
    });

    it("should set benefit to 0 if it is negative", () => {
      const props = { benefit: -5 };
      const result = drugStrategy.applyCommonRules(props);
      expect(result.benefit).toBe(0);
    });

    it("should set benefit to 50 if it is over 50", () => {
      const props = { benefit: 55 };
      const result = drugStrategy.applyCommonRules(props);
      expect(result.benefit).toBe(50);
    });

    it("should set benefit to 50 if it is exactly 50", () => {
      const props = { benefit: 50 };
      const result = drugStrategy.applyCommonRules(props);
      expect(result.benefit).toBe(50);
    });
  });

  describe("applyBenefitRules", () => {
    it("should decrease benefit by 1 when expiresIn is greater than or equal to 0", () => {
      const props = { expiresIn: 5, benefit: 10 };
      const result = drugStrategy.applyBenefitRules(props);
      expect(result.benefit).toBe(9);
    });

    it("should decrease benefit by 2 when expiresIn is less than 0", () => {
      const props = { expiresIn: -1, benefit: 10 };
      const result = drugStrategy.applyBenefitRules(props);
      expect(result.benefit).toBe(8);
    });

    it("should not allow benefit to go below 0", () => {
      const props = { expiresIn: -1, benefit: 1 };
      const result = drugStrategy.applyBenefitRules(props);
      expect(result.benefit).toBe(0);
    });

    it("should apply common rules after decreasing benefit", () => {
      const props = { expiresIn: 0, benefit: 51 };
      const result = drugStrategy.applyBenefitRules(props);
      expect(result.benefit).toBe(50);
    });
  });

  describe("applyExpiresInRules", () => {
    it("should decrease expiresIn by 1", () => {
      const props = { expiresIn: 5, benefit: 10 };
      const result = drugStrategy.applyExpiresInRules(props);
      expect(result.expiresIn).toBe(4);
    });

    it("should decrease expiresIn below 0 when needed", () => {
      const props = { expiresIn: 0, benefit: 10 };
      const result = drugStrategy.applyExpiresInRules(props);
      expect(result.expiresIn).toBe(-1);
    });

    it("should maintain the original benefit value", () => {
      const props = { expiresIn: 5, benefit: 10 };
      const result = drugStrategy.applyExpiresInRules(props);
      expect(result.benefit).toBe(10);
    });
  });

  describe("applyStrategy", () => {
    it("should apply both expiresIn and benefit rules", () => {
      const props = { expiresIn: 5, benefit: 10 };
      const result = drugStrategy.applyStrategy(props);
      expect(result.expiresIn).toBe(4);
      expect(result.benefit).toBe(9);
    });

    it("should apply doubled benefit degradation after expiration", () => {
      const props = { expiresIn: 0, benefit: 10 };
      const result = drugStrategy.applyStrategy(props);
      expect(result.expiresIn).toBe(-1);
      expect(result.benefit).toBe(8);
    });

    it("should respect benefit limits", () => {
      const props = { expiresIn: 0, benefit: 1 };
      const result = drugStrategy.applyStrategy(props);
      expect(result.expiresIn).toBe(-1);
      expect(result.benefit).toBe(0);
    });
  });
});
