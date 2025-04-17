/**
 * Drug class representing a drug with a name, expiration date, and benefit.
 * @class
 * @param {string} name - The name of the drug.
 * @param {number} expiresIn - The number of days until the drug expires.
 * @param {number} benefit - The benefit value of the drug.
 */
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}
