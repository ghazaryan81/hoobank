import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

import fluid, { extract } from "fluid-tailwind";
import * as dt from "./src/app/design-tokens";

import {
 layoutMaxWidth as layoutMax,
 layoutMinWidth as layoutMin
} from "./src/app/def/computed";

import { addStr, toTwObj } from "./src/app/func/func";
import { dir, ext } from "./src/app/def/base";

/* prettier-ignore */
const { pug, js, mjs, jsx, mjsx, ts, mts, mtsx, tsx, json, scss,
      sass, css, less, styl, html, htm, pic, ejs } = ext;

/* prettier-ignore */
const {
   in: {
    assets:     assetsIn,
    img:        imgIn,
    pic:        picIn,
    styles:     stylesIn,
    icons:      iconsIn,
    svg:        svgIn,
    src:        srcIn,
    css:        cssIn,
    tmpl:       tmplIn,
    data:       dataIn,
    fonts:      fontsIn,
   },

   out: {
    assets:     assetsOut,
    img:        imgOut,
    pic:        picOut,
    styles:     stylesOut,
    icons:      iconsOut,
    svg:        svgOut,
    build:      buildOut,
    dist:       distOut,
    fonts:      fontsOut,
   }
  } = dir;

const layoutMaxWidth = addStr(layoutMax);
const layoutMinWidth = addStr(layoutMin);

export default {
 content: {
  files: [
   `./${srcIn}/index.html`,
   `./${srcIn}/**/*.{${pug},${html},${js},${mjs},${jsx},${mjsx},${ts},${mts},${tsx},${mtsx},${ejs}}`
  ],
  extract
 },

 plugins: [require("@mertasan/tailwindcss-variables"), fluid],

 theme: {
  /* prettier-ignore */
  extend: {
   fluid: {
    defaultScreens: ["36rem", "120.2rem"]

   },
			colors:                   dt.colors,
			screens:                  dt.screens,
			borderRadius:             toTwObj(dt.borderRadius,             "border-radius"),
			opacity:                  toTwObj(dt.opacity,                  "opacity"),
			fontSize:                 toTwObj(dt.fontSize,                 "font-size"),
			fontFamily:               toTwObj(dt.fontFamily,               "font-family"),
			fontWeight:               toTwObj(dt.fontWeight,               "font-weight"),
			lineHeight:               toTwObj(dt.lineHeight,               "line-height"),
			letterSpacing:            toTwObj(dt.letterSpacing,            "letter-spacing"),
			maxWidth:                 toTwObj(dt.maxWidth,                 "max-width"),
			minWidth:                 toTwObj(dt.minWidth,                 "min-width"),
			width:                    toTwObj(dt.width,                    "width"),
			height:                   toTwObj(dt.height,                   "height"),
			minHeight:                toTwObj(dt.minHeight,                "min-height"),
			spacing:                  toTwObj(dt.spacing,                  "spacing"),
			backgroundPosition:       toTwObj(dt.backgroundPosition,       "background-position"),
			backgroundImage:          toTwObj(dt.backgroundImage,          "background-image"),
			boxShadow:                toTwObj(dt.boxShadow,                "box-shadow"),
			transitionProperty:       toTwObj(dt.transitionProperty,       "transition-property"),
			transitionDuration:       toTwObj(dt.transitionDuration,       "transition-duration"),
			transitionTimingFunction: toTwObj(dt.transitionTimingFunction, "transition-timing-function"),
			zIndex:                   toTwObj(dt.zIndex,                   "z-index"),
			gridTemplateColumns:      toTwObj(dt.gridTemplateColumns,      "grid-template-columns"),
			willChange:               toTwObj(dt.willChange,               "will-change"),
			strokeWidth:              toTwObj(dt.strokeWidth,              "stroke-width"),


/* variables: {
				DEFAULT: {
					colors: dt.colors
				}
			} */

  }
 }
} satisfies Config;
