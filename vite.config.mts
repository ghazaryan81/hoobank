import { fileURLToPath, URL } from "node:url";
import path, { join, resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, normalizePath, PluginOption } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import svgr from "vite-plugin-svgr";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import vitePugPlugin from "vite-plugin-pug-transformer";

import { imagetools } from "vite-imagetools";

import FullReload from "vite-plugin-full-reload";
import tsAlias from "vite-plugin-ts-alias";
import tsconfigPaths from "vite-tsconfig-paths";
import removeConsole from "vite-plugin-remove-console";
import data from "./src/data/db.json";
import postcssFunctions from "./src/app/func/postcss-func";

import { joinPaths, resolvePaths } from "./src/app/func";
import { dir, files, ext, layoutSizes } from "./src/app/def/base";

import type { s, n, b, f1, f2, f3, IObj, IObjNested } from "./src/app/types";

import { units } from "./src/app/def/base/units";

/* prettier-ignore */
const { pug, js, jsx, ts, tsx, json, scss,
sass, css, less, styl, html, htm, pic } = ext;

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
fonts:      fontsIn
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
js:         jsOut,
}
} = dir;

/* prettier-ignore */
const {
manifest,
robots,
favicon,
browserconfig,
twConfig,
nameExt
} = files;

const pugOptions = {};
const pugLocals = { name: data.global.appName };
const outDir = join(__dirname, buildOut);

export default defineConfig({
 root: srcIn,
 resolve: {
  alias: {
   "@": fileURLToPath(new URL("./src", import.meta.url))
  }
 },

 server: {
  // open: "/"
 },

 build: {
  outDir,
  sourcemap: true,
  assetsInlineLimit: 0, // keep SVG as assets URL
  rollupOptions: {
   output: {
    entryFileNames: `${assetsOut}/${jsOut}/[name].${js}`,
    chunkFileNames: `${assetsOut}/${jsOut}/[name].${js}`,

    assetFileNames: ({ name: fileName }) => {
     if (/\.(gif|jpe?g|png|webp|avif|ico|svg)$/.test(fileName ?? "")) {
      if (fileName?.includes(`.${pic}`)) {
       return `${assetsOut}/${imgOut}/${picOut}/${nameExt}`;
      }
      if (!fileName?.includes(`.${pic}`) && !fileName?.includes(`.f.svg`)) {
       return `${assetsOut}/${imgOut}/${nameExt}`;
      }
     }

     if (/\.(woff2|woff|eot|ttf|otf|f.svg)$/.test(fileName ?? "")) {
      return `${assetsOut}/${fontsOut}/${nameExt}`;
     }

     if (Object.values(files).includes(fileName ?? "")) {
      return `${nameExt}`;
     }

     if (/\.(css)$/.test(fileName ?? "")) {
      return `${assetsOut}/${stylesOut}/${nameExt}`;
     }

     return `${assetsOut}/${nameExt}`;
    }
   }
  }
 },

 plugins: [
  react(),
  tsconfigPaths(),
  removeConsole(),
  imagetools(),
  /* tsAlias({
   tsConfigName: "tsconfig.json"
  }), */
  /* prettier-ignore */
  ViteEjsPlugin({
   appName:       data.global.appName,
   appThemeColor: data.global.appThemeColor,
   appTitleColor: data.global.appTitleColor,
   appMaskIcon:   data.global.appMaskIcon,
   data,
   paths: {
    in: {
     assets:      joinPaths([assetsIn]),
     pic:         joinPaths([assetsIn, imgIn, picIn]),
     img:         joinPaths([assetsIn, imgIn]),
     styles:      joinPaths([assetsIn, stylesIn]),
     svg:         joinPaths([assetsIn, svgIn])
    },
    out: {
     assets:      joinPaths([assetsOut]),
     pic:         joinPaths([assetsOut, imgOut, picOut]),
     img:         joinPaths([assetsOut, imgOut]),
     styles:      joinPaths([assetsOut, stylesOut]),
     svg:         joinPaths([assetsOut, svgOut])
    }
   }
  }),

  /* prettier-ignore */
  ViteMinifyPlugin({
   collapseWhitespace:            true,
   html5:                         true,
   keepClosingSlash:              true,
   minifyCSS:                     true,
   minifyJS:                      true,
   removeAttributeQuotes:         true,
   removeComments:                true,
   removeRedundantAttributes:     true,
   removeScriptTypeAttributes:    true,
   removeStyleLinkTypeAttributes: true,
   useShortDoctype:               false,
   removeTagWhitespace:           false,
   sortAttributes:                true,
   sortClassName:                 true,
   trimCustomFragments:           true
  }),

  viteStaticCopy({
   targets: [
    {
     src: resolvePaths([__dirname, srcIn, assetsIn, imgIn, picIn]),
     dest: resolvePaths([__dirname, buildOut, assetsOut, imgOut])
    },
    {
     src: [
      resolvePaths([__dirname, srcIn, assetsIn, browserconfig]),
      resolvePaths([__dirname, srcIn, assetsIn, favicon]),
      resolvePaths([__dirname, srcIn, assetsIn, robots])
     ],
     dest: resolvePaths([__dirname, buildOut])
    }
   ]
  }),
  vitePugPlugin({ pugLocals }),
  react(),
  FullReload([`./${srcIn}/${tmplIn}/**/*.${html}`, `./${srcIn}/${dataIn}/**/*.${json}`]),
  svgr({
   svgrOptions: {}
  })
 ]
});
