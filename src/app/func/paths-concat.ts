import { normalizePath } from "vite";
import { resolve, join } from "path";

export const resolvePaths = (strArr: string[]) =>
  normalizePath(resolve(...strArr));

export const joinPaths = (strArr: string[]) =>
  join(...strArr).replace(/\\/g, "/");
