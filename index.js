import path from "path";
import fs from "fs";

import { Drug, DRUGS_TYPES } from "./src/drug/drug";
import { Pharmacy } from "./src/pharmacy/pharmacy";

const drugs = [
  new Drug(DRUGS_TYPES.DOLIPRANE, 20, 30),
  new Drug(DRUGS_TYPES.DAFALGAN, 20, 30),
  new Drug(DRUGS_TYPES.HERBAL_TEA, 10, 5),
  new Drug(DRUGS_TYPES.FERVEX, 12, 35),
  new Drug(DRUGS_TYPES.MAGIC_PILL, 15, 40),
];
const pharmacy = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(pharmacy.updateBenefitValue().map((drug) => drug.getProps()));
}

/* eslint-disable no-console */
fs.writeFile(
  path.join(process.cwd(), "output.json"),
  JSON.stringify({ result: log }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  },
);

/* eslint-enable no-console */
