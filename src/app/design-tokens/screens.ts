import { addStr, toRemObj, pxToRem } from "../../app/func";
import { layoutSizes } from "../../app/def/base";
import { IObjNested, s, n, b } from "../../app/types";

let screens: IObjNested<s> | any = {};
for (const key in layoutSizes.widths) {
  screens[key] = { max: pxToRem(layoutSizes.widths[key], true) };
}

export { screens };
