/**
 * @class Pharmacy
 * @description Represents a pharmacy that manages a collection of drugs.
 */
export class Pharmacy {
  drugs;

  /**
   * Creates an instance of the Pharmacy class.
   * @param {import('../drug/drug').Drug[]} drugs - An array of drugs to be managed by the pharmacy.
   */
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   * Updates the benefit value of all drugs in the pharmacy
   * @returns {import('../drug/drug').Drug[]} - The updated array of drugs.
   */
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateValues();
    }

    return this.drugs;
  }
}
