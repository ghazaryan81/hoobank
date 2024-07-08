/* prettier-ignore */ import { layoutSizes } from "../def/base/layout-sizes";
/* prettier-ignore */ import { toRemObj }    from "../../app/func";

/* prettier-ignore */
export const maxWidth = Object.assign(
	toRemObj(layoutSizes.fullWidths()),
	{
  "200": "20rem",
  "296": "29.6rem",
  "300": "30rem",
  "320": "32rem",
  "340": "34rem",
  "600": "60rem",
  "630": "63rem",
  "733": "73.3rem"
});
