import { DrugStrategy } from "../drug.strategy";

/**
 * @class FervexStrategy
 * @extends DrugStrategy
 * @description Strategy for handling the Fervex drug.
 */
export class FervexStrategy extends DrugStrategy {
  /**
   * Applies the fervex benefit evaluation rules.
   * * "Fervex" like Herbal Tea, increases in Benefit as its expiration date approaches.
   * * "Fervex" increases in Benefit by 2 when there are 10 days or less.
   * * "Fervex" increases in Benefit by 3 when there are 5 days or less.
   * * "Fervex" Benefit drops to 0 after the expiration date.
   * @param {import('../drug').DrugProps} props - The drug properties
   * @returns {import('../drug').DrugProps} - The updated drug properties
   */
  applyBenefitRules(props) {
    const { expiresIn, benefit } = props;
    if (expiresIn < 0) {
      return this.applyCommonRules({ ...props, benefit: 0 });
    }

    // if (expiresIn <= 5) { // This should be use if we refer to the rules described in the README ( by 3 when there are 5 days or less )
    if (expiresIn < 5) {
      // I keep this to be consistent with te previous output.json generated as it's asked in the README
      return this.applyCommonRules({ ...props, benefit: benefit + 3 });
    }

    // if (expiresIn <= 10) { // This should be use if we refer to the rules described in the README ( Benefit increases by 2 when there are 10 days or less)
    if (expiresIn < 10) {
      // I keep this to be consistent with te previous output.json generated as it's asked in the README
      return this.applyCommonRules({ ...props, benefit: benefit + 2 });
    }

    return this.applyCommonRules({ ...props, benefit: benefit + 1 });
  }
}
