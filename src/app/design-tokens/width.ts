/* prettier-ignore */ import { layoutSizes } from "../def/base/layout-sizes";
/* prettier-ignore */ import { toRemObj }    from "../../app/func";

/* prettier-ignore */
export const width = Object.assign(
	toRemObj(layoutSizes.fullWidths()), {
  "32": "3.2rem",
  "50": "5rem",
  "547": "54.7rem",

  "12_7615p": "12.76153846153846%",
  "21_5829p": "21.58290598290598%",
  "24_8854p": "24.88547008547009%",
  "40_7692p": "40.76923076923077%",

  "50p": "50%",
  "60p": "60%",
  "70p": "70%",
  "80p": "80%",
  "90p": "90%",
  "100p": "100%",

  "1-12": "calc(1 * 8.547% - 30px)",
  "2-12": "calc(2 * 8.547% - 30px)",
  "3-12": "calc(3 * 8.547% - 30px)",
  "4-12": "calc(4 * 8.547% - 30px)",
  "5-12": "calc(5 * 8.547% - 30px)",
  "6-12": "calc(6 * 8.547% - 30px)",
  "7-12": "calc(7 * 8.547% - 30px)",
  "8-12": "calc(8 * 8.547% - 30px)",
  "9-12": "calc(9 * 8.547% - 30px)",
  "10-12": "calc(10 * 8.547% - 30px)",
  "11-12": "calc(11 * 8.547% - 30px)",
  "12-12": "calc(12 * 8.547% - 30px)",

  "1-7": "calc(1 * 14.8% - 30px)",
  "2-7": "calc(2 * 14.8% - 30px)",
  "3-7": "calc(3 * 14.8% - 30px)",
  "4-7": "calc(4 * 14.8% - 30px)",
  "5-7": "calc(5 * 14.8% - 30px)",
  "6-7": "calc(6 * 14.8% - 30px)",
  "7-7": "calc(7 * 14.8% - 30px)"
});
