import { layoutSizes } from "../base/layout-sizes";

export const layoutMinWidth = Math.min(
  ...Object.values(layoutSizes.fullWidths()).map((it) => Number(it))
);
