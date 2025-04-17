import { HerbalTeaStrategy } from "./herbalTea.strategy";

describe("HerbalTeaStrategy", () => {
  let strategy;

  beforeEach(() => {
    strategy = new HerbalTeaStrategy();
  });

  describe("applyStrategy", () => {
    it("should increase benefit by 1", () => {
      const props = { name: "HerbalTea", expiresIn: 15, benefit: 20 };
      const result = strategy.applyStrategy(props);
      expect(result.benefit).toBe(21);
    });

    it("should increase benefit by 2 when expired", () => {
      const props = { name: "HerbalTea", expiresIn: 0, benefit: 20 };
      const result = strategy.applyStrategy(props);
      expect(result.expiresIn).toBe(-1);
      expect(result.benefit).toBe(22);
    });
  });
});
