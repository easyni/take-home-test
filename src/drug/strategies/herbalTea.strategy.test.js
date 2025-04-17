import { DRUGS_TYPES } from "../drug";
import { HerbalTeaStrategy } from "./herbalTea.strategy";

describe("HerbalTeaStrategy", () => {
  let strategy;

  beforeEach(() => {
    strategy = new HerbalTeaStrategy();
  });

  describe("applyStrategy", () => {
    it("should increase benefit by 1", () => {
      const props = {
        name: DRUGS_TYPES.HERBAL_TEA,
        expiresIn: 15,
        benefit: 20,
      };
      const result = strategy.applyStrategy(props);
      expect(result.benefit).toBe(21);
    });

    it("should increase benefit by 2 when expired", () => {
      const props = { name: DRUGS_TYPES.HERBAL_TEA, expiresIn: 0, benefit: 20 };
      const result = strategy.applyStrategy(props);
      expect(result.expiresIn).toBe(-1);
      expect(result.benefit).toBe(22);
    });
  });
});
