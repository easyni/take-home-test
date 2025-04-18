import { Drug, DRUGS_TYPES } from "./drug";
import { DrugStrategy } from "./drug.strategy";
import { DolipraneStrategy } from "./strategies/doliprane.strategy";

// Mock the strategy classes
jest.mock("./drug.strategy");
jest.mock("./strategies/doliprane.strategy");

describe("Drug", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe("updateValues", () => {
    it("should use the default DrugStrategy to unknown drugs", () => {
      const drug = new Drug("Test Drug", 10, 20);
      const mockApplyStrategy = jest.fn().mockReturnValue({
        name: "Test Drug",
        expiresIn: 9,
        benefit: 21,
      });

      DrugStrategy.mockImplementation(() => ({
        applyStrategy: mockApplyStrategy,
      }));

      drug.updateValues();

      expect(mockApplyStrategy).toHaveBeenCalledWith({
        name: "Test Drug",
        expiresIn: 10,
        benefit: 20,
      });

      expect(drug.expiresIn).toBe(9);
      expect(drug.benefit).toBe(21);
    });
    it("should use the correct strategy to update drug properties for known drugs", () => {
      const drug = new Drug(DRUGS_TYPES.DOLIPRANE, 10, 20);
      const mockApplyStrategy = jest.fn().mockReturnValue({
        name: DRUGS_TYPES.DOLIPRANE,
        expiresIn: 9,
        benefit: 21,
      });

      DolipraneStrategy.mockImplementation(() => ({
        applyStrategy: mockApplyStrategy,
      }));

      drug.updateValues();

      expect(mockApplyStrategy).toHaveBeenCalledWith({
        name: DRUGS_TYPES.DOLIPRANE,
        expiresIn: 10,
        benefit: 20,
      });

      expect(drug.expiresIn).toBe(9);
      expect(drug.benefit).toBe(21);
    });
  });

  describe("getProps", () => {
    it("should return an object with the drug properties", () => {
      const drug = new Drug("Test Drug", 10, 20);

      const props = drug.getProps();

      expect(props).toEqual({
        name: "Test Drug",
        expiresIn: 10,
        benefit: 20,
      });
    });
  });
});
