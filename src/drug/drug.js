import { DRUGS_TYPES } from "./utils/drug.const";
import { DrugStrategy } from "./drug.strategy";
import { DolipraneStrategy } from "./strategies/doliprane.strategy";
import { FervexStrategy } from "./strategies/fervex.strategy";
import { HerbalTeaStrategy } from "./strategies/herbalTea.strategy";
import { MagicPillStrategy } from "./strategies/magicPill.strategy";

/**
 * @typedef {Object} DrugProps
 * @property {string} name - The name of the drug
 * @property {number} expiresIn - The number of days until the drug expires
 * @property {number} benefit - The benefit value of the drug
 */

/**
 * Drug class representing a drug with a name, expiration date, and benefit.
 * @class
 * @property {string} name - The name of the drug
 * @property {number} expiresIn - The number of days until the drug expires
 * @property {number} benefit - The benefit value of the drug
 */
export class Drug {
  name;
  expiresIn;
  benefit;

  /**
   * Create a new Drug instance
   * @param {string} name - The name of the drug
   * @param {number} expiresIn - The number of days until the drug expires
   * @param {number} benefit - The benefit value of the drug
   */
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * Updates the drug properties
   * @param {DrugProps} newProps- The drug properties
   * @returns {Drug} - The updated drug object
   */
  #updateProperties(newProps) {
    this.name = newProps.name ?? this.name;
    this.expiresIn = newProps.expiresIn ?? this.expiresIn;
    this.benefit = newProps.benefit ?? this.benefit;
    return this;
  }

  /**
   * Returns the appropriate DrugStrategy instance based on the drug name
   * @param {string} name - The name of the drug
   * @returns {DrugStrategy} - The strategy class for the drug
   */
  #getStrategy(name) {
    switch (name) {
      case DRUGS_TYPES.HERBAL_TEA:
        return new HerbalTeaStrategy();
      case DRUGS_TYPES.MAGIC_PILL:
        return new MagicPillStrategy();
      case DRUGS_TYPES.FERVEX:
        return new FervexStrategy();
      case DRUGS_TYPES.DOLIPRANE:
        return new DolipraneStrategy();
      default:
        return new DrugStrategy();
    }
  }

  /**
   * Updates the benefit value of the drug based on its strategy
   * @returns {Drug} - The updated drug object
   */
  updateBenefitValue() {
    const props = this.getProps();
    const strategy = this.#getStrategy(this.name);
    const updatedProps = strategy.applyStrategy(props);
    return this.#updateProperties(updatedProps);
  }

  /**
   * Returns drug data for external use
   * @returns {DrugProps} - The drug properties
   */
  getProps() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit,
    };
  }
}
