import fs from "fs";
import { toCustomPropertiesString } from "object-to-css-variables";
import * as dt from "../src/app/design-tokens";
/* prettier-ignore */
const cssVars = toCustomPropertiesString({
	screens:                  dt.screens,
 /* color:                    dt.colors, */
 fontWeight:               dt.fontWeight,
 borderRadius:             dt.borderRadius,
 opacity:                  dt.opacity,
 fontSize:                 dt.fontSize,
 fontFamily:               dt.fontFamily,
 lineHeight:               dt.lineHeight,
 letterSpacing:            dt.letterSpacing,
 maxWidth:                 dt.maxWidth,
 minWidth:                 dt.minWidth,
 width:                    dt.width,
 height:                   dt.height,
 minHeight:                dt.minHeight,
 spacing:                  dt.spacing,
 backgroundPosition:       dt.backgroundPosition,
 backgroundImage:          dt.backgroundImage,
 boxShadow:                dt.boxShadow,
 transitionProperty:       dt.transitionProperty,
 transitionDuration:       dt.transitionDuration,
 transitionTimingFunction: dt.transitionTimingFunction,
 zIndex:                   dt.zIndex,
 willChange:               dt.willChange,
 content:                  dt.content,
 gridTemplateColumns:      dt.gridTemplateColumns,
 strokeWidth:              dt.strokeWidth
});

fs.writeFile("./src/styles/tailwind/base/root.css", `:root{${cssVars}}`, (err) => {
 console.log(err);
});
