/**
 * DrugStrategy is an abstract class that defines the strategy for
 * updating the drug benefit depending on its expiresIn date.
 */
export class DrugStrategy {
  /**
   * Applies common rules to the drug properties
   * * The Benefit of an item is never negative.
   * * The Benefit of an item is never more than 50.
   * @param {import('./drug').DrugProps} props - The drug properties
   */
  applyCommonRules(props) {
    const { benefit } = props;

    if (benefit < 0) {
      return { ...props, benefit: 0 };
    }

    if (benefit >= 50) {
      return { ...props, benefit: 50 };
    }

    return props;
  }

  /**
   * Applies default rules to the drug benefit evaluation
   * * At the end of each day our system lowers benefit by 1.
   * * Once the expiration date has passed, benefit degrades twice as fast.
   * @param {import('./drug').DrugProps} props - The drug properties
   * @returns {import('./drug').DrugProps} - The updated drug properties
   */
  applyBenefitRules(props) {
    const { expiresIn, benefit } = props;
    if (expiresIn < 0) {
      return this.applyCommonRules({ ...props, benefit: benefit - 2 });
    }
    return this.applyCommonRules({ ...props, benefit: benefit - 1 });
  }

  /**
   * Applies default ExpiresIn evaluation rules for the drug
   * * At the end of each day our system lowers expiresIn by 1.
   * @param {import('./drug').DrugProps} props - The drug properties
   * @returns {import('./drug').DrugProps} - The updated drug properties
   */
  applyExpiresInRules(props) {
    const { expiresIn } = props;
    return this.applyCommonRules({ ...props, expiresIn: expiresIn - 1 });
  }

  /**
   * Applies expiresIn rules for the drug
   * @param {import('./drug').DrugProps} props - The drug properties
   * @returns {import('./drug').DrugProps} - The updated drug properties
   */
  applyStrategy(props) {
    const applyExpiresInProps = this.applyExpiresInRules(props);
    return this.applyBenefitRules(applyExpiresInProps);
  }
}
