/* prettier-ignore */ import type { s, n, b, IObj,
	                                   IObjNested, f1,
																																				f2, f3, f3o2,
																																				f2o1 }       from "../../types";
/* prettier-ignore */ import { remSizes as rem } from "./remSizes";
/* prettier-ignore */ import { units }           from "./units";

export const layoutSizes: IObjNested<n> | any = {
  sides: {
    sm: 16,
    md: 16,
    lg: 16,
    xl: 16
  },

  widths: {
    sm: 288,
    md: 736,
    lg: 960,
    xl: 1170
  },

  fullWidths() {
    return Object.keys(this.widths).reduce(
      (accum: IObj<n>, curr) => ({
        ...accum,
        [curr]: this.widths[curr] + 2 * this.sides[curr]
      }),
      {}
    );
  },

  breakPoints() {
    return Object.keys(this.widths).reduce(
      (accum: IObj<n>, curr) => ({
        ...accum,
        [curr]: (this.widths[curr] + 2 * this.sides[curr]) / rem.fix
      }),
      {}
    );
  }
};
