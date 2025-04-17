import { DrugStrategy } from "../drug.strategy";

/**
 * @class DolipraneStrategy
 * @extends DrugStrategy
 * @description Strategy for handling the Doliprane drug.
 */
export class DolipraneStrategy extends DrugStrategy {
  /**
   * Applies default drug benefit evaluation rules for the drug
   * @param {import('../drug.strategy').DrugProps} props - The drug properties
   * @returns {import('../drug.strategy').DrugProps} - The updated drug properties
   */
  applyStrategy(props) {
    const applyExpiresInProps = this.applyExpiresInRules(props);
    return this.applyBenefitRules(applyExpiresInProps);
  }
}
