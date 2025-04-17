import { FervexStrategy } from "./fervex.strategy";

describe("FervexStrategy", () => {
  let strategy;

  beforeEach(() => {
    strategy = new FervexStrategy();
  });

  describe("applyStrategy", () => {
    it("should increase benefit by 1 when expiresIn >= 10", () => {
      const props = { name: "Fervex", expiresIn: 15, benefit: 20 };
      const result = strategy.applyStrategy(props);
      expect(result.benefit).toBe(21);
    });

    it("should increase benefit by 2 when expiresIn < 10 but >= 5", () => {
      const props = { name: "Fervex", expiresIn: 9, benefit: 20 };
      const result = strategy.applyStrategy(props);
      expect(result.benefit).toBe(22);
    });

    it("should increase benefit by 3 when expiresIn < 5 but >= 0", () => {
      const props = { name: "Fervex", expiresIn: 4, benefit: 20 };
      const result = strategy.applyStrategy(props);
      expect(result.benefit).toBe(23);
    });

    it("should set benefit to 0 when expired", () => {
      const props = { name: "Fervex", expiresIn: 0, benefit: 20 };
      const result = strategy.applyStrategy(props);
      expect(result.expiresIn).toBe(-1);
      expect(result.benefit).toBe(0);
    });
  });
});
