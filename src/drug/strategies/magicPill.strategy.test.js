import { DRUGS_TYPES } from "../drug";
import { MagicPillStrategy } from "./magicPill.strategy";

describe("MagicPillStrategy", () => {
  let strategy;

  beforeEach(() => {
    strategy = new MagicPillStrategy();
  });

  describe("applyStrategy", () => {
    it("should not change benefit or expiresIn all the time", () => {
      const props = {
        name: DRUGS_TYPES.MAGIC_PILL,
        expiresIn: 10,
        benefit: 20,
      };
      const result = strategy.applyStrategy(props);
      expect(result.expiresIn).toBe(10);
      expect(result.benefit).toBe(20);
    });
  });
});
