import { DrugStrategy } from "../drug.strategy";

/**
 * @class MagicPillStrategy
 * @extends DrugStrategy
 * @description Strategy for handling the Magic Pill drug.
 */
export class MagicPillStrategy extends DrugStrategy {
  /**
   * Applies no rules to the drug benefit evaluation (as magic pills do not change)
   * * "MagicPill" never expires nor decreases in Benefit.
   * @param {import('../drug').DrugProps} props - The drug properties
   * @returns {import('../drug').DrugProps} - The updated drug properties
   */
  applyStrategy(props) {
    return props;
  }
}
