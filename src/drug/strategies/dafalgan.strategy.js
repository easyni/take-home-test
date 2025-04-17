import { DrugStrategy } from "../drug.strategy";

/**
 * @class DafalganStrategy
 * @extends DrugStrategy
 * @description Strategy for handling the Dafalgan drug.
 */
export class DafalganStrategy extends DrugStrategy {
  /**
   * Applies the dafalgans benefit evaluation rules.
   * * "Dafalgan" degrades in Benefit twice as fast as normal drugs.
   * @param {import('../drug').DrugProps} props - The drug properties
   * @returns {import('../drug').DrugProps} - The updated drug properties
   */
  applyStrategy(props) {
    // We apply the default rules
    const defaultDrugRulesApplied = super.applyStrategy(props);
    // And apply benefit rules a second time as Dafalgan degrades twice as fast as normal drugs
    return this.applyBenefitRules(defaultDrugRulesApplied);
  }
}
