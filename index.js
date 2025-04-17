import { Drug } from "./src/drug/drug";
import { DRUGS_TYPES } from "./src/drug/utils/drug.const";
import { Pharmacy } from "./src/pharmacy/pharmacy";

import fs from "fs";

const drugs = [
  new Drug(DRUGS_TYPES.DOLIPRANE, 20, 30),
  new Drug(DRUGS_TYPES.HERBAL_TEA, 10, 5),
  new Drug(DRUGS_TYPES.FERVEX, 12, 35),
  new Drug(DRUGS_TYPES.MAGIC_PILL, 15, 40),
];
const pharmacy = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

/* eslint-disable no-console */
fs.writeFile(
  "output.json",
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
