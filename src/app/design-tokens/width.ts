/* prettier-ignore */ import { layoutSizes } from "../def/base/layout-sizes";
/* prettier-ignore */ import { toRemObj } from "../../app/func";

/* prettier-ignore */
export const width = Object.assign(toRemObj(layoutSizes.fullWidths()), {
  "50p":  "50%",
  "60p":  "60%",
  "70p":  "70%",
  "80p":  "80%",
  "90p":  "90%",
  "100p": "100%"
});
