/* prettier-ignore */ import type { s, n, b, IObj,
	                                   IObjNested, f1,
																																				f2, f3, f3o2,
																																				f2o1 }       from "../../types";
/* prettier-ignore */ import { remSizes as rem } from "./remSizes";
/* prettier-ignore */ import { units }           from "./units";

export const layoutSizes: IObjNested<n> | any = {
  sides: {
    xl: 16,
    lg: 16,
    md: 16,
    sm: 16
  },

  gutters: {
    xl: 18,
    lg: 12,
    md: 8,
    sm: 12
  },

  widths: {
    xl: 1170,
    lg: 960,
    md: 736,
    sm: 288
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
