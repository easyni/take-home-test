import { DafalganStrategy } from "./dafalgan.strategy";

describe("DafalganStrategy", () => {
  let strategy;

  beforeEach(() => {
    strategy = new DafalganStrategy();
  });

  describe("applyStrategy", () => {
    it("should decrease benefit by 2 when not expired", () => {
      const props = { name: "Dafalgan", expiresIn: 5, benefit: 10 };
      const result = strategy.applyStrategy(props);
      expect(result.benefit).toBe(8);
    });

    it("should decrease benefit by 4 when expired", () => {
      const props = { name: "Dafalgan", expiresIn: 0, benefit: 10 };
      const result = strategy.applyStrategy(props);
      expect(result.expiresIn).toBe(-1);
      expect(result.benefit).toBe(6);
    });
  });
});
