import { DolipraneStrategy } from "./doliprane.strategy";

describe("DolipraneStrategy", () => {
  let strategy;

  beforeEach(() => {
    strategy = new DolipraneStrategy();
  });

  describe("applyStrategy", () => {
    it("should decrease expiresIn by 1", () => {
      const props = { name: "Doliprane", expiresIn: 5, benefit: 10 };
      const result = strategy.applyStrategy(props);
      expect(result.expiresIn).toBe(4);
    });

    it("should decrease benefit by 1 when not expired", () => {
      const props = { name: "Doliprane", expiresIn: 5, benefit: 10 };
      const result = strategy.applyStrategy(props);
      expect(result.benefit).toBe(9);
    });

    it("should decrease benefit by 2 when expired", () => {
      const props = { name: "Doliprane", expiresIn: 0, benefit: 10 };
      const result = strategy.applyStrategy(props);
      expect(result.expiresIn).toBe(-1);
      expect(result.benefit).toBe(8);
    });
  });
});
