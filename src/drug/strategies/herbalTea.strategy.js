import { DrugStrategy } from "../drug.strategy";

/**
 * @class HerbalTeaStrategy
 * @extends DrugStrategy
 * @description Strategy for handling the Herbal Tea drug.
 */
export class HerbalTeaStrategy extends DrugStrategy {
  /**
   * Applies the herbal tea benefit evaluation rules.
   * * "Herbal Tea" actually increases in Benefit the older it gets.
   * * "Herbal Tea" Benefit increases twice as fast after the expiration date.
   * @param {import('../drug').DrugProps} props - The drug properties
   * @returns {import('../drug').DrugProps} - The updated drug properties
   */
  applyBenefitRules(props) {
    const { expiresIn, benefit } = props;
    if (expiresIn < 0) {
      return this.applyCommonRules({ ...props, benefit: benefit + 2 });
    }
    return this.applyCommonRules({ ...props, benefit: benefit + 1 });
  }
}
