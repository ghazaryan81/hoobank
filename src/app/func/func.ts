/* prettier-ignore */ import type { s, n, b, IObj,
	                                   IObjNested, f1, f2,
														                      f3, f3o2, f2o1 } from "../types";
/* prettier-ignore */ import { remSizes as rem }     from "../def/base/remSizes";
/* prettier-ignore */ import { units }               from "../def/base/units";

export const addStr: f3o2<n | s, b, s, s> = (
  val,
  isEnd = true,
  str = units.rem
) => (isEnd ? `${val}${str}` : `${str}${val}`);

export const pxToRem: f2o1<n, b, s> = (val, isMedia = false) =>
  addStr(val / (!isMedia ? rem.current : rem.fix));

export const toRemObj = (obj: IObj<n>, isMedia = false): IObj<s> =>
  Object.keys(obj).reduce(
    (acc, key) =>
      Object.assign(acc, {
        [key]: pxToRem(obj[key], isMedia)
      }),
    {}
  );

export const toTwObj = (data: IObj<s>, key: s) => {
  const twObj: IObj<s> = {};
  Object.keys(data).forEach((item) => {
    twObj[item] = `var(--${key}-${item})`;
  });
  return twObj;
};
