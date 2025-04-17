import { DrugStrategy } from "./drug.strategy";
import { DolipraneStrategy } from "./strategies/doliprane.strategy";
import { FervexStrategy } from "./strategies/fervex.strategy";
import { HerbalTeaStrategy } from "./strategies/herbalTea.strategy";
import { MagicPillStrategy } from "./strategies/magicPill.strategy";
import { DafalganStrategy } from "./strategies/dafalgan.strategy";

/**
 * @constant {Object} DRUGS_TYPES
 * @description An object containing the different types of drugs.
 */
export const DRUGS_TYPES = {
  HERBAL_TEA: "Herbal Tea",
  MAGIC_PILL: "Magic Pill",
  FERVEX: "Fervex",
  DOLIPRANE: "Doliprane",
  DAFALGAN: "Dafalgan",
};

/**
 * @typedef {Object} DrugProps
 * @property {string} name - The name of the drug
 * @property {number} expiresIn - The number of days until the drug expires
 * @property {number} benefit - The benefit value of the drug
 */

/**
 * @class Drug
 * @description Represent a drug with a name, expiration date, and benefit.
 */
export class Drug {
  /**
   * @type {string} the name of the drug
   */
  name;
  /**
   * @type {number} the number of days until the drug expires
   */
  expiresIn;
  /**
   * @type {number} the benefit value of the drug
   */
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
   * Sets the properties of the drug
   * @param {Partial<DrugProps>} props - The drug properties
   * @returns {Drug} - The updated drug object
   */
  #setProperties(props) {
    this.name = props.name ?? this.name;
    this.expiresIn = props.expiresIn ?? this.expiresIn;
    this.benefit = props.benefit ?? this.benefit;
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
      case DRUGS_TYPES.DAFALGAN:
        return new DafalganStrategy();
      default:
        return new DrugStrategy();
    }
  }

  /**
   * Returns drug properties as an object
   * @returns {DrugProps} - The drug properties
   */
  getProps() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit,
    };
  }

  /**
   * Updates the drug properties based on the appropriate strategy
   * @returns {Drug} - The updated drug object
   */
  updateValues() {
    const props = this.getProps();
    const strategy = this.#getStrategy(props.name);
    const updatedProps = strategy.applyStrategy(props);
    this.#setProperties(updatedProps);
    return this;
  }
}
