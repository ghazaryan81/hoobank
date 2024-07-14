import { join } from "path";

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import pcssSCSS from "postcss-scss";
import pcssNested from "postcss-nested";
import pcssFlexbugs from "postcss-flexbugs-fixes";
import pcssFunctions from "postcss-functions";
import pcssImport from "postcss-import";
import pcssDiscardComments from "postcss-discard-comments";
import pcssInlineComments from "postcss-remove-inline-comments";
import pcssSimpleVars from "postcss-simple-vars";
import pcssConsole from "@postcss-plugins/console";
import pcssInlineSvg from "postcss-inline-svg";
import pcssMixins from "postcss-mixins";
import pcssSvgo from "postcss-svgo";
import postcssCustomMedia from "postcss-custom-media";
import twNested from "tailwindcss/nesting";
import pcss0SelectDuplicate from "postcss-combine-duplicated-selectors";
import pcss0PropDuplicate from "postcss-discard-duplicates";
import pcssSortMedia from "sort-css-media-queries";
import pcssDiscardEmpty from "postcss-discard-empty";
import pcssReporter from "postcss-reporter";
import postcssPresetEnv from "postcss-preset-env";
import pcssFocusWithin from "postcss-focus-within";
import pcssCascadeLayers from "@csstools/postcss-cascade-layers";

import pcssSvgBg from "postcss-inline-svg";

import { layoutSizes } from "./src/app/def/base";
import { pxToRem, toRemObj } from "./src/app/func";

// @ts-ignore
import pcssEach from "postcss-each";
// @ts-ignore
import pcssFocus from "postcss-focus";
// @ts-ignore
import jsonToRoot from "@daltontan/postcss-import-json";
// @ts-ignore
import pcssDropunusedvars from "postcss-dropunusedvars";
import postcssFunctions from "./src/app/func/postcss-func";

// @ts-ignore
import pcssSortMediaQueries from "postcss-sort-media-queries";

// @ts-ignore
import pcssCombineMediaQuery from "postcss-combine-media-query";

import cssvariables from "postcss-css-variables";
import pcssVar from "postcss-variables";

import { screens } from "./src/app/design-tokens/screens";

export default {
 /*
	syntax: pcssSCSS,
 parser: pcssSCSS,
	*/
 plugins: [
  cssvariables,
  pcssImport,
  pcssCascadeLayers,
  pcssSvgBg,
  /* pcssFunctions({ functions: postcssFunctions.stripUnit }), */
  jsonToRoot,
  postcssPresetEnv,
  pcssEach,
  pcssNested,
  pcssFlexbugs,
  pcssMixins,
  twNested,
  pcssSimpleVars,
  pcssConsole,
  pcssVar({
   globals: {
    mq: {
     sm: screens.sm.max,
     md: screens.md.max,
     lg: screens.lg.max,
     xl: screens.xl.max
    }
   }
  }),
  tailwindcss({ config: join(__dirname, "tailwind.config.ts") }),
  pcssCombineMediaQuery,
  pcssSortMediaQueries,
  pcssDiscardComments,
  pcssDropunusedvars({ fix: true }),
  autoprefixer()
 ]
};
