import { layoutSizes } from "../base/layout-sizes";

export const layoutMaxWidth = Math.max(
  ...Object.values(layoutSizes.breakPoints()).map((it) => Number(it))
);
