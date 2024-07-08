/* prettier-ignore */ import { layoutSizes } from "../def/base/layout-sizes";
/* prettier-ignore */ import { toRemObj }    from "../../app/func";

/* prettier-ignore */
export const minWidth = Object.assign(
	toRemObj(layoutSizes.fullWidths()),
  {
		"200": "20rem",
		"300": "30rem"
		}
);
