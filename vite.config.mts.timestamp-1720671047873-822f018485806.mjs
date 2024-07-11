// vite.config.mts
import { fileURLToPath, URL } from "node:url";
import { join as join2 } from "path";
import react from "file:///C:/projects/hoobank/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig } from "file:///C:/projects/hoobank/node_modules/vite/dist/node/index.js";
import { viteStaticCopy } from "file:///C:/projects/hoobank/node_modules/vite-plugin-static-copy/dist/index.js";
import svgr from "file:///C:/projects/hoobank/node_modules/vite-plugin-svgr/dist/index.js";
import { ViteEjsPlugin } from "file:///C:/projects/hoobank/node_modules/vite-plugin-ejs/index.js";
import { ViteMinifyPlugin } from "file:///C:/projects/hoobank/node_modules/vite-plugin-minify/dist/index.js";
import vitePugPlugin from "file:///C:/projects/hoobank/node_modules/vite-plugin-pug-transformer/src/index.js";
import { imagetools } from "file:///C:/projects/hoobank/node_modules/vite-imagetools/dist/index.js";
import FullReload from "file:///C:/projects/hoobank/node_modules/vite-plugin-full-reload/dist/index.js";
import tsconfigPaths from "file:///C:/projects/hoobank/node_modules/vite-tsconfig-paths/dist/index.mjs";
import removeConsole from "file:///C:/projects/hoobank/node_modules/vite-plugin-remove-console/dist/index.mjs";

// src/data/db.json
var db_default = {
  global: {
    appName: "HooBank",
    appThemeColor: "#ffffff",
    appTitleColor: "#ffffff",
    appMaskIcon: "#ff0000"
  },
  menu: [
    {
      id: 1,
      label: "About Us",
      slug: "about-us"
    },
    {
      id: 2,
      label: "Features",
      slug: "features"
    },
    {
      id: 3,
      label: "Solution",
      slug: "solution"
    },
    {
      id: 4,
      label: "Testimonials",
      slug: "testimonials"
    },
    {
      id: 5,
      label: "Services",
      slug: "services"
    }
  ],
  sections: {
    header: {
      title: "For Your Pet\u2019s Natural Life & Care",
      descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
    },
    present: {
      title: "For Your Pet\u2019s Natural Life & Care",
      descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
      buttons: ["Our Services", "Make Appointment"]
    },
    about: {
      sup: "Care For Your Pet",
      title: "What We Do",
      segments: [
        {
          id: "1",
          title: "Pet Grooming",
          descr: "There are many variatio of passage of Lorem for a Ipsum available",
          icon: {
            name: "icon-bone",
            width: "40.04",
            height: "39.98"
          }
        },
        {
          id: "2",
          title: "Veterinary",
          descr: "There are many variatio of passage of Lorem for a Ipsum available",
          icon: {
            name: "icon-paw",
            width: "40",
            height: "40"
          }
        },
        {
          id: "3",
          title: "Dog Setting",
          descr: "There are many variatio of passage of Lorem for a Ipsum available",
          icon: {
            name: "icon-dog",
            width: "50",
            height: "40"
          }
        },
        {
          id: "4",
          title: "Healthy Meals",
          descr: "There are many variatio of passage of Lorem for a Ipsum available",
          icon: {
            name: "icon-syringe",
            width: "50",
            height: "40"
          }
        }
      ]
    },
    services: {
      sup: "Our Success Story",
      title: "Experience Vet Clinic And Services",
      descr: "Aliquam erat volutpat In id fermentum augue, ut pellentesque  Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hakso hendrerit id. In aliquet magna nec lobortis maximus.",
      link: {
        label: "Know More About Us",
        href: "#",
        alt: "",
        title: ""
      },
      segments: [
        {
          id: "1",
          title: "Donec commodo scelerisque laoreet nibh hendrerit"
        },
        {
          id: "2",
          title: "In aliquet magna nec lobortis maximus. Etiam a dolor placerat"
        },
        {
          id: "3",
          title: "Etiam dolor nec elementum ipsum convall Maecenas"
        }
      ]
    },
    team: {
      sup: "Our Team",
      title: "Meet Our Groomers",
      segments: [
        {
          id: "1",
          title: "Rosalina Wiliam",
          descr: "CEO & Founder",
          img: {
            src: ""
          }
        },
        {
          id: "2",
          title: "Rosalina Wiliam",
          descr: "CEO & Founder",
          img: {
            src: ""
          }
        },
        {
          id: "3",
          title: "Rosalina Wiliam",
          descr: "CEO & Founder",
          img: {
            src: ""
          }
        },
        {
          id: "4",
          title: "Rosalina Wiliam",
          descr: "CEO & Founder",
          img: {
            src: ""
          }
        }
      ]
    },
    contacts: {
      title: "Professional Pet Care",
      descr: "Pet owners trust us to look after the needs of their beloved companions. We are specialists committed to delivering the very highest of veterinary care and affection.",
      link: {
        label: "Contact Us Now",
        href: "#",
        alt: "",
        title: ""
      }
    },
    prices: {
      segments: [
        {
          id: "1",
          title: "Regular Pack",
          descr: "3 Days",
          list: [
            "Pet Shower",
            "Fitness Checkup",
            "Pet Grooming",
            "Hair and Nail Cut",
            "Control Hair Falling"
          ],
          price: {
            currency: "$",
            value: "150",
            period: "Per Visit"
          },
          link: {
            label: "Purchase Pack",
            href: "#",
            alt: "",
            title: ""
          }
        },
        {
          id: "2",
          title: "Exclusive Pack",
          descr: "10 Days",
          list: [
            "Pet Shower",
            "Fitness Checkup",
            "Pet Grooming",
            "Hair and Nail Cut",
            "Control Hair Falling",
            "Brush & Blow Dry",
            "Pet Park And Games"
          ],
          price: {
            currency: "$",
            value: "300",
            period: "Per Visit"
          },
          link: {
            label: "Purchase Pack",
            href: "#",
            alt: "",
            title: ""
          }
        },
        {
          id: "3",
          title: "Regular Pack",
          descr: "3 Days",
          list: [
            "Pet Shower",
            "Fitness Checkup",
            "Pet Grooming",
            "Hair and Nail Cut",
            "Control Hair Falling"
          ],
          price: {
            currency: "$",
            value: "550",
            period: "Per Visit"
          },
          link: {
            label: "Purchase Pack",
            href: "#",
            alt: "",
            title: ""
          }
        }
      ]
    },
    footer: {
      title: ["", ""],
      descr: "A new way to make the payments easy, reliable and secure.",
      segments: [
        {
          id: 0,
          title: "Usefull Links",
          list: [
            {
              title: "Content",
              link: "#"
            },
            {
              title: "How it Works",
              link: "#"
            },
            {
              title: "Create",
              link: "#"
            },
            {
              title: "Explore",
              link: "#"
            },
            {
              title: "Terms & Services",
              link: "#"
            }
          ]
        },
        {
          id: 1,
          title: "Community",
          list: [
            {
              title: "Help Center",
              link: "#"
            },
            {
              title: "Partners",
              link: "#"
            },
            {
              title: "Suggestions",
              link: "#"
            },
            {
              title: "Blog",
              link: "#"
            },
            {
              title: "Newsletters",
              link: "#"
            }
          ]
        },
        {
          id: 2,
          title: "Community",
          list: [
            {
              title: "Our Partner",
              link: "#"
            },
            {
              title: "Become a Partner",
              link: "#"
            }
          ]
        }
      ]
    },
    misc: {
      logo: ["Vet", "care"],
      copyright: {
        title: "Copyright",
        symbol: "\xA9",
        start: "2021",
        end: "current"
      },
      author: "HooBank.",
      reserved: "All Rights Reserved.",
      phones: ["", ""],
      nojs: "You need to enable JavaScript to run this app."
    }
  }
};

// src/app/func/paths-concat.ts
import { normalizePath } from "file:///C:/projects/hoobank/node_modules/vite/dist/node/index.js";
import { resolve, join } from "path";
var resolvePaths = (strArr) => normalizePath(resolve(...strArr));
var joinPaths = (strArr) => join(...strArr).replace(/\\/g, "/");

// src/app/def/base/dir.ts
var dir = {
  in: {
    assets: "assets",
    img: "img",
    styles: "styles",
    icons: "icons",
    svg: "svg",
    src: "src",
    css: "css",
    js: "js",
    tmpl: "view-tmpl",
    data: "data",
    fonts: "fonts",
    pic: "pic",
    picSrc: "pic-src"
  },
  out: {
    assets: "assets",
    img: "img",
    pic: "pic",
    styles: "css",
    icons: "icons",
    svg: "svg",
    build: "build",
    dist: "dist",
    fonts: "fonts",
    css: "css",
    js: "js"
  }
};

// src/app/def/base/files.ts
var files = {
  manifest: "manifest.json",
  robots: "robots.txt",
  favicon: "favicon.ico",
  browserconfig: "browserconfig.xml",
  twConfig: "tailwind.config.ts",
  nameExt: "[name].[ext]"
};

// src/app/def/base/ext.ts
var ext = {
  pug: "pug",
  js: "js",
  mjs: "mjs",
  jsx: "jsx",
  mjsx: "mjsx",
  ts: "ts",
  mts: "mts",
  tsx: "tsx",
  mtsx: "mtsx",
  json: "json",
  scss: "scss",
  sass: "sass",
  css: "css",
  less: "less",
  styl: "styl",
  html: "html",
  htm: "htm",
  pic: "pic",
  ejs: "ejs",
  md: "md"
};

// vite.config.mts
var __vite_injected_original_dirname = "C:\\projects\\hoobank";
var __vite_injected_original_import_meta_url = "file:///C:/projects/hoobank/vite.config.mts";
var {
  pug,
  js,
  jsx,
  ts,
  tsx,
  json,
  scss,
  sass,
  css,
  less,
  styl,
  html,
  htm,
  pic
} = ext;
var {
  in: {
    assets: assetsIn,
    img: imgIn,
    pic: picIn,
    styles: stylesIn,
    icons: iconsIn,
    svg: svgIn,
    src: srcIn,
    css: cssIn,
    tmpl: tmplIn,
    data: dataIn,
    fonts: fontsIn
  },
  out: {
    assets: assetsOut,
    img: imgOut,
    pic: picOut,
    styles: stylesOut,
    icons: iconsOut,
    svg: svgOut,
    build: buildOut,
    dist: distOut,
    fonts: fontsOut,
    js: jsOut
  }
} = dir;
var {
  manifest,
  robots,
  favicon,
  browserconfig,
  twConfig,
  nameExt
} = files;
var pugLocals = { name: db_default.global.appName };
var outDir = join2(__vite_injected_original_dirname, buildOut);
var vite_config_default = defineConfig({
  root: srcIn,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    // open: "/"
  },
  build: {
    outDir,
    sourcemap: true,
    assetsInlineLimit: 0,
    // keep SVG as assets URL
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
      appName: db_default.global.appName,
      appThemeColor: db_default.global.appThemeColor,
      appTitleColor: db_default.global.appTitleColor,
      appMaskIcon: db_default.global.appMaskIcon,
      data: db_default,
      paths: {
        in: {
          assets: joinPaths([assetsIn]),
          pic: joinPaths([assetsIn, imgIn, picIn]),
          img: joinPaths([assetsIn, imgIn]),
          styles: joinPaths([assetsIn, stylesIn]),
          svg: joinPaths([assetsIn, svgIn])
        },
        out: {
          assets: joinPaths([assetsOut]),
          pic: joinPaths([assetsOut, imgOut, picOut]),
          img: joinPaths([assetsOut, imgOut]),
          styles: joinPaths([assetsOut, stylesOut]),
          svg: joinPaths([assetsOut, svgOut])
        }
      }
    }),
    /* prettier-ignore */
    ViteMinifyPlugin({
      collapseWhitespace: true,
      html5: true,
      keepClosingSlash: true,
      minifyCSS: true,
      minifyJS: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: true,
      trimCustomFragments: true
    }),
    viteStaticCopy({
      targets: [
        {
          src: resolvePaths([__vite_injected_original_dirname, srcIn, assetsIn, imgIn, picIn]),
          dest: resolvePaths([__vite_injected_original_dirname, buildOut, assetsOut, imgOut])
        },
        {
          src: [
            resolvePaths([__vite_injected_original_dirname, srcIn, assetsIn, browserconfig]),
            resolvePaths([__vite_injected_original_dirname, srcIn, assetsIn, favicon]),
            resolvePaths([__vite_injected_original_dirname, srcIn, assetsIn, robots])
          ],
          dest: resolvePaths([__vite_injected_original_dirname, buildOut])
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
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgInNyYy9kYXRhL2RiLmpzb24iLCAic3JjL2FwcC9mdW5jL3BhdGhzLWNvbmNhdC50cyIsICJzcmMvYXBwL2RlZi9iYXNlL2Rpci50cyIsICJzcmMvYXBwL2RlZi9iYXNlL2ZpbGVzLnRzIiwgInNyYy9hcHAvZGVmL2Jhc2UvZXh0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxccHJvamVjdHNcXFxcaG9vYmFua1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxccHJvamVjdHNcXFxcaG9vYmFua1xcXFx2aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3RzL2hvb2Jhbmsvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5pbXBvcnQgcGF0aCwgeyBqb2luLCByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIG5vcm1hbGl6ZVBhdGgsIFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdGF0aWMtY29weVwiO1xuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcbmltcG9ydCB7IFZpdGVFanNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tZWpzXCI7XG5pbXBvcnQgeyBWaXRlTWluaWZ5UGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1pbmlmeVwiO1xuaW1wb3J0IHZpdGVQdWdQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLXB1Zy10cmFuc2Zvcm1lclwiO1xuXG5pbXBvcnQgeyBpbWFnZXRvb2xzIH0gZnJvbSBcInZpdGUtaW1hZ2V0b29sc1wiO1xuXG5pbXBvcnQgRnVsbFJlbG9hZCBmcm9tIFwidml0ZS1wbHVnaW4tZnVsbC1yZWxvYWRcIjtcbmltcG9ydCB0c0FsaWFzIGZyb20gXCJ2aXRlLXBsdWdpbi10cy1hbGlhc1wiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcbmltcG9ydCByZW1vdmVDb25zb2xlIGZyb20gXCJ2aXRlLXBsdWdpbi1yZW1vdmUtY29uc29sZVwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vc3JjL2RhdGEvZGIuanNvblwiO1xuaW1wb3J0IHBvc3Rjc3NGdW5jdGlvbnMgZnJvbSBcIi4vc3JjL2FwcC9mdW5jL3Bvc3Rjc3MtZnVuY1wiO1xuXG5pbXBvcnQgeyBqb2luUGF0aHMsIHJlc29sdmVQYXRocyB9IGZyb20gXCIuL3NyYy9hcHAvZnVuY1wiO1xuaW1wb3J0IHsgZGlyLCBmaWxlcywgZXh0LCBsYXlvdXRTaXplcyB9IGZyb20gXCIuL3NyYy9hcHAvZGVmL2Jhc2VcIjtcblxuaW1wb3J0IHR5cGUgeyBzLCBuLCBiLCBmMSwgZjIsIGYzLCBJT2JqLCBJT2JqTmVzdGVkIH0gZnJvbSBcIi4vc3JjL2FwcC90eXBlc1wiO1xuXG5pbXBvcnQgeyB1bml0cyB9IGZyb20gXCIuL3NyYy9hcHAvZGVmL2Jhc2UvdW5pdHNcIjtcblxuLyogcHJldHRpZXItaWdub3JlICovXG5jb25zdCB7IHB1ZywganMsIGpzeCwgdHMsIHRzeCwganNvbiwgc2NzcyxcbnNhc3MsIGNzcywgbGVzcywgc3R5bCwgaHRtbCwgaHRtLCBwaWMgfSA9IGV4dDtcblxuLyogcHJldHRpZXItaWdub3JlICovXG5jb25zdCB7XG5pbjoge1xuYXNzZXRzOiAgICAgYXNzZXRzSW4sXG5pbWc6ICAgICAgICBpbWdJbixcbnBpYzogICAgICAgIHBpY0luLFxuc3R5bGVzOiAgICAgc3R5bGVzSW4sXG5pY29uczogICAgICBpY29uc0luLFxuc3ZnOiAgICAgICAgc3ZnSW4sXG5zcmM6ICAgICAgICBzcmNJbixcbmNzczogICAgICAgIGNzc0luLFxudG1wbDogICAgICAgdG1wbEluLFxuZGF0YTogICAgICAgZGF0YUluLFxuZm9udHM6ICAgICAgZm9udHNJblxufSxcblxub3V0OiB7XG5hc3NldHM6ICAgICBhc3NldHNPdXQsXG5pbWc6ICAgICAgICBpbWdPdXQsXG5waWM6ICAgICAgICBwaWNPdXQsXG5zdHlsZXM6ICAgICBzdHlsZXNPdXQsXG5pY29uczogICAgICBpY29uc091dCxcbnN2ZzogICAgICAgIHN2Z091dCxcbmJ1aWxkOiAgICAgIGJ1aWxkT3V0LFxuZGlzdDogICAgICAgZGlzdE91dCxcbmZvbnRzOiAgICAgIGZvbnRzT3V0LFxuanM6ICAgICAgICAganNPdXQsXG59XG59ID0gZGlyO1xuXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cbmNvbnN0IHtcbm1hbmlmZXN0LFxucm9ib3RzLFxuZmF2aWNvbixcbmJyb3dzZXJjb25maWcsXG50d0NvbmZpZyxcbm5hbWVFeHRcbn0gPSBmaWxlcztcblxuY29uc3QgcHVnT3B0aW9ucyA9IHt9O1xuY29uc3QgcHVnTG9jYWxzID0geyBuYW1lOiBkYXRhLmdsb2JhbC5hcHBOYW1lIH07XG5jb25zdCBvdXREaXIgPSBqb2luKF9fZGlybmFtZSwgYnVpbGRPdXQpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuIHJvb3Q6IHNyY0luLFxuIHJlc29sdmU6IHtcbiAgYWxpYXM6IHtcbiAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKVxuICB9XG4gfSxcblxuIHNlcnZlcjoge1xuICAvLyBvcGVuOiBcIi9cIlxuIH0sXG5cbiBidWlsZDoge1xuICBvdXREaXIsXG4gIHNvdXJjZW1hcDogdHJ1ZSxcbiAgYXNzZXRzSW5saW5lTGltaXQ6IDAsIC8vIGtlZXAgU1ZHIGFzIGFzc2V0cyBVUkxcbiAgcm9sbHVwT3B0aW9uczoge1xuICAgb3V0cHV0OiB7XG4gICAgZW50cnlGaWxlTmFtZXM6IGAke2Fzc2V0c091dH0vJHtqc091dH0vW25hbWVdLiR7anN9YCxcbiAgICBjaHVua0ZpbGVOYW1lczogYCR7YXNzZXRzT3V0fS8ke2pzT3V0fS9bbmFtZV0uJHtqc31gLFxuXG4gICAgYXNzZXRGaWxlTmFtZXM6ICh7IG5hbWU6IGZpbGVOYW1lIH0pID0+IHtcbiAgICAgaWYgKC9cXC4oZ2lmfGpwZT9nfHBuZ3x3ZWJwfGF2aWZ8aWNvfHN2ZykkLy50ZXN0KGZpbGVOYW1lID8/IFwiXCIpKSB7XG4gICAgICBpZiAoZmlsZU5hbWU/LmluY2x1ZGVzKGAuJHtwaWN9YCkpIHtcbiAgICAgICByZXR1cm4gYCR7YXNzZXRzT3V0fS8ke2ltZ091dH0vJHtwaWNPdXR9LyR7bmFtZUV4dH1gO1xuICAgICAgfVxuICAgICAgaWYgKCFmaWxlTmFtZT8uaW5jbHVkZXMoYC4ke3BpY31gKSAmJiAhZmlsZU5hbWU/LmluY2x1ZGVzKGAuZi5zdmdgKSkge1xuICAgICAgIHJldHVybiBgJHthc3NldHNPdXR9LyR7aW1nT3V0fS8ke25hbWVFeHR9YDtcbiAgICAgIH1cbiAgICAgfVxuXG4gICAgIGlmICgvXFwuKHdvZmYyfHdvZmZ8ZW90fHR0ZnxvdGZ8Zi5zdmcpJC8udGVzdChmaWxlTmFtZSA/PyBcIlwiKSkge1xuICAgICAgcmV0dXJuIGAke2Fzc2V0c091dH0vJHtmb250c091dH0vJHtuYW1lRXh0fWA7XG4gICAgIH1cblxuICAgICBpZiAoT2JqZWN0LnZhbHVlcyhmaWxlcykuaW5jbHVkZXMoZmlsZU5hbWUgPz8gXCJcIikpIHtcbiAgICAgIHJldHVybiBgJHtuYW1lRXh0fWA7XG4gICAgIH1cblxuICAgICBpZiAoL1xcLihjc3MpJC8udGVzdChmaWxlTmFtZSA/PyBcIlwiKSkge1xuICAgICAgcmV0dXJuIGAke2Fzc2V0c091dH0vJHtzdHlsZXNPdXR9LyR7bmFtZUV4dH1gO1xuICAgICB9XG5cbiAgICAgcmV0dXJuIGAke2Fzc2V0c091dH0vJHtuYW1lRXh0fWA7XG4gICAgfVxuICAgfVxuICB9XG4gfSxcblxuIHBsdWdpbnM6IFtcbiAgcmVhY3QoKSxcbiAgdHNjb25maWdQYXRocygpLFxuICByZW1vdmVDb25zb2xlKCksXG4gIGltYWdldG9vbHMoKSxcbiAgLyogdHNBbGlhcyh7XG4gICB0c0NvbmZpZ05hbWU6IFwidHNjb25maWcuanNvblwiXG4gIH0pLCAqL1xuICAvKiBwcmV0dGllci1pZ25vcmUgKi9cbiAgVml0ZUVqc1BsdWdpbih7XG4gICBhcHBOYW1lOiAgICAgICBkYXRhLmdsb2JhbC5hcHBOYW1lLFxuICAgYXBwVGhlbWVDb2xvcjogZGF0YS5nbG9iYWwuYXBwVGhlbWVDb2xvcixcbiAgIGFwcFRpdGxlQ29sb3I6IGRhdGEuZ2xvYmFsLmFwcFRpdGxlQ29sb3IsXG4gICBhcHBNYXNrSWNvbjogICBkYXRhLmdsb2JhbC5hcHBNYXNrSWNvbixcbiAgIGRhdGEsXG4gICBwYXRoczoge1xuICAgIGluOiB7XG4gICAgIGFzc2V0czogICAgICBqb2luUGF0aHMoW2Fzc2V0c0luXSksXG4gICAgIHBpYzogICAgICAgICBqb2luUGF0aHMoW2Fzc2V0c0luLCBpbWdJbiwgcGljSW5dKSxcbiAgICAgaW1nOiAgICAgICAgIGpvaW5QYXRocyhbYXNzZXRzSW4sIGltZ0luXSksXG4gICAgIHN0eWxlczogICAgICBqb2luUGF0aHMoW2Fzc2V0c0luLCBzdHlsZXNJbl0pLFxuICAgICBzdmc6ICAgICAgICAgam9pblBhdGhzKFthc3NldHNJbiwgc3ZnSW5dKVxuICAgIH0sXG4gICAgb3V0OiB7XG4gICAgIGFzc2V0czogICAgICBqb2luUGF0aHMoW2Fzc2V0c091dF0pLFxuICAgICBwaWM6ICAgICAgICAgam9pblBhdGhzKFthc3NldHNPdXQsIGltZ091dCwgcGljT3V0XSksXG4gICAgIGltZzogICAgICAgICBqb2luUGF0aHMoW2Fzc2V0c091dCwgaW1nT3V0XSksXG4gICAgIHN0eWxlczogICAgICBqb2luUGF0aHMoW2Fzc2V0c091dCwgc3R5bGVzT3V0XSksXG4gICAgIHN2ZzogICAgICAgICBqb2luUGF0aHMoW2Fzc2V0c091dCwgc3ZnT3V0XSlcbiAgICB9XG4gICB9XG4gIH0pLFxuXG4gIC8qIHByZXR0aWVyLWlnbm9yZSAqL1xuICBWaXRlTWluaWZ5UGx1Z2luKHtcbiAgIGNvbGxhcHNlV2hpdGVzcGFjZTogICAgICAgICAgICB0cnVlLFxuICAgaHRtbDU6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICBrZWVwQ2xvc2luZ1NsYXNoOiAgICAgICAgICAgICAgdHJ1ZSxcbiAgIG1pbmlmeUNTUzogICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgbWluaWZ5SlM6ICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICByZW1vdmVBdHRyaWJ1dGVRdW90ZXM6ICAgICAgICAgdHJ1ZSxcbiAgIHJlbW92ZUNvbW1lbnRzOiAgICAgICAgICAgICAgICB0cnVlLFxuICAgcmVtb3ZlUmVkdW5kYW50QXR0cmlidXRlczogICAgIHRydWUsXG4gICByZW1vdmVTY3JpcHRUeXBlQXR0cmlidXRlczogICAgdHJ1ZSxcbiAgIHJlbW92ZVN0eWxlTGlua1R5cGVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgdXNlU2hvcnREb2N0eXBlOiAgICAgICAgICAgICAgIGZhbHNlLFxuICAgcmVtb3ZlVGFnV2hpdGVzcGFjZTogICAgICAgICAgIGZhbHNlLFxuICAgc29ydEF0dHJpYnV0ZXM6ICAgICAgICAgICAgICAgIHRydWUsXG4gICBzb3J0Q2xhc3NOYW1lOiAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgIHRyaW1DdXN0b21GcmFnbWVudHM6ICAgICAgICAgICB0cnVlXG4gIH0pLFxuXG4gIHZpdGVTdGF0aWNDb3B5KHtcbiAgIHRhcmdldHM6IFtcbiAgICB7XG4gICAgIHNyYzogcmVzb2x2ZVBhdGhzKFtfX2Rpcm5hbWUsIHNyY0luLCBhc3NldHNJbiwgaW1nSW4sIHBpY0luXSksXG4gICAgIGRlc3Q6IHJlc29sdmVQYXRocyhbX19kaXJuYW1lLCBidWlsZE91dCwgYXNzZXRzT3V0LCBpbWdPdXRdKVxuICAgIH0sXG4gICAge1xuICAgICBzcmM6IFtcbiAgICAgIHJlc29sdmVQYXRocyhbX19kaXJuYW1lLCBzcmNJbiwgYXNzZXRzSW4sIGJyb3dzZXJjb25maWddKSxcbiAgICAgIHJlc29sdmVQYXRocyhbX19kaXJuYW1lLCBzcmNJbiwgYXNzZXRzSW4sIGZhdmljb25dKSxcbiAgICAgIHJlc29sdmVQYXRocyhbX19kaXJuYW1lLCBzcmNJbiwgYXNzZXRzSW4sIHJvYm90c10pXG4gICAgIF0sXG4gICAgIGRlc3Q6IHJlc29sdmVQYXRocyhbX19kaXJuYW1lLCBidWlsZE91dF0pXG4gICAgfVxuICAgXVxuICB9KSxcbiAgdml0ZVB1Z1BsdWdpbih7IHB1Z0xvY2FscyB9KSxcbiAgcmVhY3QoKSxcbiAgRnVsbFJlbG9hZChbYC4vJHtzcmNJbn0vJHt0bXBsSW59LyoqLyouJHtodG1sfWAsIGAuLyR7c3JjSW59LyR7ZGF0YUlufS8qKi8qLiR7anNvbn1gXSksXG4gIHN2Z3Ioe1xuICAgc3Znck9wdGlvbnM6IHt9XG4gIH0pXG4gXVxufSk7XG4iLCAie1xuIFwiZ2xvYmFsXCI6IHtcbiAgXCJhcHBOYW1lXCI6IFwiSG9vQmFua1wiLFxuICBcImFwcFRoZW1lQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gIFwiYXBwVGl0bGVDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgXCJhcHBNYXNrSWNvblwiOiBcIiNmZjAwMDBcIlxuIH0sXG5cbiBcIm1lbnVcIjogW1xuICB7XG4gICBcImlkXCI6IDEsXG4gICBcImxhYmVsXCI6IFwiQWJvdXQgVXNcIixcbiAgIFwic2x1Z1wiOiBcImFib3V0LXVzXCJcbiAgfSxcbiAge1xuICAgXCJpZFwiOiAyLFxuICAgXCJsYWJlbFwiOiBcIkZlYXR1cmVzXCIsXG4gICBcInNsdWdcIjogXCJmZWF0dXJlc1wiXG4gIH0sXG4gIHtcbiAgIFwiaWRcIjogMyxcbiAgIFwibGFiZWxcIjogXCJTb2x1dGlvblwiLFxuICAgXCJzbHVnXCI6IFwic29sdXRpb25cIlxuICB9LFxuICB7XG4gICBcImlkXCI6IDQsXG4gICBcImxhYmVsXCI6IFwiVGVzdGltb25pYWxzXCIsXG4gICBcInNsdWdcIjogXCJ0ZXN0aW1vbmlhbHNcIlxuICB9LFxuICB7XG4gICBcImlkXCI6IDUsXG4gICBcImxhYmVsXCI6IFwiU2VydmljZXNcIixcbiAgIFwic2x1Z1wiOiBcInNlcnZpY2VzXCJcbiAgfVxuIF0sXG5cbiBcInNlY3Rpb25zXCI6IHtcbiAgXCJoZWFkZXJcIjoge1xuICAgXCJ0aXRsZVwiOiBcIkZvciBZb3VyIFBldFx1MjAxOXMgTmF0dXJhbCBMaWZlICYgQ2FyZVwiLFxuICAgXCJkZXNjclwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudFwiXG4gIH0sXG5cbiAgXCJwcmVzZW50XCI6IHtcbiAgIFwidGl0bGVcIjogXCJGb3IgWW91ciBQZXRcdTIwMTlzIE5hdHVyYWwgTGlmZSAmIENhcmVcIixcbiAgIFwiZGVzY3JcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnRcIixcbiAgIFwiYnV0dG9uc1wiOiBbXCJPdXIgU2VydmljZXNcIiwgXCJNYWtlIEFwcG9pbnRtZW50XCJdXG4gIH0sXG5cbiAgXCJhYm91dFwiOiB7XG4gICBcInN1cFwiOiBcIkNhcmUgRm9yIFlvdXIgUGV0XCIsXG4gICBcInRpdGxlXCI6IFwiV2hhdCBXZSBEb1wiLFxuICAgXCJzZWdtZW50c1wiOiBbXG4gICAge1xuICAgICBcImlkXCI6IFwiMVwiLFxuICAgICBcInRpdGxlXCI6IFwiUGV0IEdyb29taW5nXCIsXG4gICAgIFwiZGVzY3JcIjogXCJUaGVyZSBhcmUgbWFueSB2YXJpYXRpbyBvZiBwYXNzYWdlIG9mIExvcmVtIGZvciBhIElwc3VtIGF2YWlsYWJsZVwiLFxuICAgICBcImljb25cIjoge1xuICAgICAgXCJuYW1lXCI6IFwiaWNvbi1ib25lXCIsXG4gICAgICBcIndpZHRoXCI6IFwiNDAuMDRcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMzkuOThcIlxuICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgIFwiaWRcIjogXCIyXCIsXG4gICAgIFwidGl0bGVcIjogXCJWZXRlcmluYXJ5XCIsXG4gICAgIFwiZGVzY3JcIjogXCJUaGVyZSBhcmUgbWFueSB2YXJpYXRpbyBvZiBwYXNzYWdlIG9mIExvcmVtIGZvciBhIElwc3VtIGF2YWlsYWJsZVwiLFxuICAgICBcImljb25cIjoge1xuICAgICAgXCJuYW1lXCI6IFwiaWNvbi1wYXdcIixcbiAgICAgIFwid2lkdGhcIjogXCI0MFwiLFxuICAgICAgXCJoZWlnaHRcIjogXCI0MFwiXG4gICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgXCJpZFwiOiBcIjNcIixcbiAgICAgXCJ0aXRsZVwiOiBcIkRvZyBTZXR0aW5nXCIsXG4gICAgIFwiZGVzY3JcIjogXCJUaGVyZSBhcmUgbWFueSB2YXJpYXRpbyBvZiBwYXNzYWdlIG9mIExvcmVtIGZvciBhIElwc3VtIGF2YWlsYWJsZVwiLFxuICAgICBcImljb25cIjoge1xuICAgICAgXCJuYW1lXCI6IFwiaWNvbi1kb2dcIixcbiAgICAgIFwid2lkdGhcIjogXCI1MFwiLFxuICAgICAgXCJoZWlnaHRcIjogXCI0MFwiXG4gICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgXCJpZFwiOiBcIjRcIixcbiAgICAgXCJ0aXRsZVwiOiBcIkhlYWx0aHkgTWVhbHNcIixcbiAgICAgXCJkZXNjclwiOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvIG9mIHBhc3NhZ2Ugb2YgTG9yZW0gZm9yIGEgSXBzdW0gYXZhaWxhYmxlXCIsXG4gICAgIFwiaWNvblwiOiB7XG4gICAgICBcIm5hbWVcIjogXCJpY29uLXN5cmluZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCI1MFwiLFxuICAgICAgXCJoZWlnaHRcIjogXCI0MFwiXG4gICAgIH1cbiAgICB9XG4gICBdXG4gIH0sXG4gIFwic2VydmljZXNcIjoge1xuICAgXCJzdXBcIjogXCJPdXIgU3VjY2VzcyBTdG9yeVwiLFxuICAgXCJ0aXRsZVwiOiBcIkV4cGVyaWVuY2UgVmV0IENsaW5pYyBBbmQgU2VydmljZXNcIixcbiAgIFwiZGVzY3JcIjogXCJBbGlxdWFtIGVyYXQgdm9sdXRwYXQgSW4gaWQgZmVybWVudHVtIGF1Z3VlLCB1dCBwZWxsZW50ZXNxdWUgIE1hZWNlbmFzIGF0IGFyY3UgcmlzdXMuIERvbmVjIGNvbW1vZG8gc29kYWxlcyBleCwgc2NlbGVyaXNxdWUgbGFvcmVldCBuaWJoIGhha3NvIGhlbmRyZXJpdCBpZC4gSW4gYWxpcXVldCBtYWduYSBuZWMgbG9ib3J0aXMgbWF4aW11cy5cIixcbiAgIFwibGlua1wiOiB7XG4gICAgXCJsYWJlbFwiOiBcIktub3cgTW9yZSBBYm91dCBVc1wiLFxuICAgIFwiaHJlZlwiOiBcIiNcIixcbiAgICBcImFsdFwiOiBcIlwiLFxuICAgIFwidGl0bGVcIjogXCJcIlxuICAgfSxcbiAgIFwic2VnbWVudHNcIjogW1xuICAgIHtcbiAgICAgXCJpZFwiOiBcIjFcIixcbiAgICAgXCJ0aXRsZVwiOiBcIkRvbmVjIGNvbW1vZG8gc2NlbGVyaXNxdWUgbGFvcmVldCBuaWJoIGhlbmRyZXJpdFwiXG4gICAgfSxcbiAgICB7XG4gICAgIFwiaWRcIjogXCIyXCIsXG4gICAgIFwidGl0bGVcIjogXCJJbiBhbGlxdWV0IG1hZ25hIG5lYyBsb2JvcnRpcyBtYXhpbXVzLiBFdGlhbSBhIGRvbG9yIHBsYWNlcmF0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgXCJpZFwiOiBcIjNcIixcbiAgICAgXCJ0aXRsZVwiOiBcIkV0aWFtIGRvbG9yIG5lYyBlbGVtZW50dW0gaXBzdW0gY29udmFsbCBNYWVjZW5hc1wiXG4gICAgfVxuICAgXVxuICB9LFxuICBcInRlYW1cIjoge1xuICAgXCJzdXBcIjogXCJPdXIgVGVhbVwiLFxuICAgXCJ0aXRsZVwiOiBcIk1lZXQgT3VyIEdyb29tZXJzXCIsXG4gICBcInNlZ21lbnRzXCI6IFtcbiAgICB7XG4gICAgIFwiaWRcIjogXCIxXCIsXG4gICAgIFwidGl0bGVcIjogXCJSb3NhbGluYSBXaWxpYW1cIixcbiAgICAgXCJkZXNjclwiOiBcIkNFTyAmIEZvdW5kZXJcIixcbiAgICAgXCJpbWdcIjoge1xuICAgICAgXCJzcmNcIjogXCJcIlxuICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgIFwiaWRcIjogXCIyXCIsXG4gICAgIFwidGl0bGVcIjogXCJSb3NhbGluYSBXaWxpYW1cIixcbiAgICAgXCJkZXNjclwiOiBcIkNFTyAmIEZvdW5kZXJcIixcbiAgICAgXCJpbWdcIjoge1xuICAgICAgXCJzcmNcIjogXCJcIlxuICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgIFwiaWRcIjogXCIzXCIsXG4gICAgIFwidGl0bGVcIjogXCJSb3NhbGluYSBXaWxpYW1cIixcbiAgICAgXCJkZXNjclwiOiBcIkNFTyAmIEZvdW5kZXJcIixcbiAgICAgXCJpbWdcIjoge1xuICAgICAgXCJzcmNcIjogXCJcIlxuICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgIFwiaWRcIjogXCI0XCIsXG4gICAgIFwidGl0bGVcIjogXCJSb3NhbGluYSBXaWxpYW1cIixcbiAgICAgXCJkZXNjclwiOiBcIkNFTyAmIEZvdW5kZXJcIixcbiAgICAgXCJpbWdcIjoge1xuICAgICAgXCJzcmNcIjogXCJcIlxuICAgICB9XG4gICAgfVxuICAgXVxuICB9LFxuICBcImNvbnRhY3RzXCI6IHtcbiAgIFwidGl0bGVcIjogXCJQcm9mZXNzaW9uYWwgUGV0IENhcmVcIixcbiAgIFwiZGVzY3JcIjogXCJQZXQgb3duZXJzIHRydXN0IHVzIHRvIGxvb2sgYWZ0ZXIgdGhlIG5lZWRzIG9mIHRoZWlyIGJlbG92ZWQgY29tcGFuaW9ucy4gV2UgYXJlIHNwZWNpYWxpc3RzIGNvbW1pdHRlZCB0byBkZWxpdmVyaW5nIHRoZSB2ZXJ5IGhpZ2hlc3Qgb2YgdmV0ZXJpbmFyeSBjYXJlIGFuZCBhZmZlY3Rpb24uXCIsXG4gICBcImxpbmtcIjoge1xuICAgIFwibGFiZWxcIjogXCJDb250YWN0IFVzIE5vd1wiLFxuICAgIFwiaHJlZlwiOiBcIiNcIixcbiAgICBcImFsdFwiOiBcIlwiLFxuICAgIFwidGl0bGVcIjogXCJcIlxuICAgfVxuICB9LFxuICBcInByaWNlc1wiOiB7XG4gICBcInNlZ21lbnRzXCI6IFtcbiAgICB7XG4gICAgIFwiaWRcIjogXCIxXCIsXG4gICAgIFwidGl0bGVcIjogXCJSZWd1bGFyIFBhY2tcIixcbiAgICAgXCJkZXNjclwiOiBcIjMgRGF5c1wiLFxuICAgICBcImxpc3RcIjogW1xuICAgICAgXCJQZXQgU2hvd2VyXCIsXG4gICAgICBcIkZpdG5lc3MgQ2hlY2t1cFwiLFxuICAgICAgXCJQZXQgR3Jvb21pbmdcIixcbiAgICAgIFwiSGFpciBhbmQgTmFpbCBDdXRcIixcbiAgICAgIFwiQ29udHJvbCBIYWlyIEZhbGxpbmdcIlxuICAgICBdLFxuICAgICBcInByaWNlXCI6IHtcbiAgICAgIFwiY3VycmVuY3lcIjogXCIkXCIsXG4gICAgICBcInZhbHVlXCI6IFwiMTUwXCIsXG4gICAgICBcInBlcmlvZFwiOiBcIlBlciBWaXNpdFwiXG4gICAgIH0sXG4gICAgIFwibGlua1wiOiB7XG4gICAgICBcImxhYmVsXCI6IFwiUHVyY2hhc2UgUGFja1wiLFxuICAgICAgXCJocmVmXCI6IFwiI1wiLFxuICAgICAgXCJhbHRcIjogXCJcIixcbiAgICAgIFwidGl0bGVcIjogXCJcIlxuICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgIFwiaWRcIjogXCIyXCIsXG4gICAgIFwidGl0bGVcIjogXCJFeGNsdXNpdmUgUGFja1wiLFxuICAgICBcImRlc2NyXCI6IFwiMTAgRGF5c1wiLFxuICAgICBcImxpc3RcIjogW1xuICAgICAgXCJQZXQgU2hvd2VyXCIsXG4gICAgICBcIkZpdG5lc3MgQ2hlY2t1cFwiLFxuICAgICAgXCJQZXQgR3Jvb21pbmdcIixcbiAgICAgIFwiSGFpciBhbmQgTmFpbCBDdXRcIixcbiAgICAgIFwiQ29udHJvbCBIYWlyIEZhbGxpbmdcIixcbiAgICAgIFwiQnJ1c2ggJiBCbG93IERyeVwiLFxuICAgICAgXCJQZXQgUGFyayBBbmQgR2FtZXNcIlxuICAgICBdLFxuICAgICBcInByaWNlXCI6IHtcbiAgICAgIFwiY3VycmVuY3lcIjogXCIkXCIsXG4gICAgICBcInZhbHVlXCI6IFwiMzAwXCIsXG4gICAgICBcInBlcmlvZFwiOiBcIlBlciBWaXNpdFwiXG4gICAgIH0sXG4gICAgIFwibGlua1wiOiB7XG4gICAgICBcImxhYmVsXCI6IFwiUHVyY2hhc2UgUGFja1wiLFxuICAgICAgXCJocmVmXCI6IFwiI1wiLFxuICAgICAgXCJhbHRcIjogXCJcIixcbiAgICAgIFwidGl0bGVcIjogXCJcIlxuICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgIFwiaWRcIjogXCIzXCIsXG4gICAgIFwidGl0bGVcIjogXCJSZWd1bGFyIFBhY2tcIixcbiAgICAgXCJkZXNjclwiOiBcIjMgRGF5c1wiLFxuICAgICBcImxpc3RcIjogW1xuICAgICAgXCJQZXQgU2hvd2VyXCIsXG4gICAgICBcIkZpdG5lc3MgQ2hlY2t1cFwiLFxuICAgICAgXCJQZXQgR3Jvb21pbmdcIixcbiAgICAgIFwiSGFpciBhbmQgTmFpbCBDdXRcIixcbiAgICAgIFwiQ29udHJvbCBIYWlyIEZhbGxpbmdcIlxuICAgICBdLFxuICAgICBcInByaWNlXCI6IHtcbiAgICAgIFwiY3VycmVuY3lcIjogXCIkXCIsXG4gICAgICBcInZhbHVlXCI6IFwiNTUwXCIsXG4gICAgICBcInBlcmlvZFwiOiBcIlBlciBWaXNpdFwiXG4gICAgIH0sXG4gICAgIFwibGlua1wiOiB7XG4gICAgICBcImxhYmVsXCI6IFwiUHVyY2hhc2UgUGFja1wiLFxuICAgICAgXCJocmVmXCI6IFwiI1wiLFxuICAgICAgXCJhbHRcIjogXCJcIixcbiAgICAgIFwidGl0bGVcIjogXCJcIlxuICAgICB9XG4gICAgfVxuICAgXVxuICB9LFxuICBcImZvb3RlclwiOiB7XG4gICBcInRpdGxlXCI6IFtcIlwiLCBcIlwiXSxcbiAgIFwiZGVzY3JcIjogXCJBIG5ldyB3YXkgdG8gbWFrZSB0aGUgcGF5bWVudHMgZWFzeSwgcmVsaWFibGUgYW5kIHNlY3VyZS5cIixcbiAgIFwic2VnbWVudHNcIjogW1xuICAgIHtcbiAgICAgXCJpZFwiOiAwLFxuICAgICBcInRpdGxlXCI6IFwiVXNlZnVsbCBMaW5rc1wiLFxuICAgICBcImxpc3RcIjogW1xuICAgICAge1xuICAgICAgIFwidGl0bGVcIjogXCJDb250ZW50XCIsXG4gICAgICAgXCJsaW5rXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgIFwidGl0bGVcIjogXCJIb3cgaXQgV29ya3NcIixcbiAgICAgICBcImxpbmtcIjogXCIjXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgXCJ0aXRsZVwiOiBcIkNyZWF0ZVwiLFxuICAgICAgIFwibGlua1wiOiBcIiNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICBcInRpdGxlXCI6IFwiRXhwbG9yZVwiLFxuICAgICAgIFwibGlua1wiOiBcIiNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICBcInRpdGxlXCI6IFwiVGVybXMgJiBTZXJ2aWNlc1wiLFxuICAgICAgIFwibGlua1wiOiBcIiNcIlxuICAgICAgfVxuICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgIFwiaWRcIjogMSxcbiAgICAgXCJ0aXRsZVwiOiBcIkNvbW11bml0eVwiLFxuICAgICBcImxpc3RcIjogW1xuICAgICAge1xuICAgICAgIFwidGl0bGVcIjogXCJIZWxwIENlbnRlclwiLFxuICAgICAgIFwibGlua1wiOiBcIiNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICBcInRpdGxlXCI6IFwiUGFydG5lcnNcIixcbiAgICAgICBcImxpbmtcIjogXCIjXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgXCJ0aXRsZVwiOiBcIlN1Z2dlc3Rpb25zXCIsXG4gICAgICAgXCJsaW5rXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgIFwidGl0bGVcIjogXCJCbG9nXCIsXG4gICAgICAgXCJsaW5rXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgIFwidGl0bGVcIjogXCJOZXdzbGV0dGVyc1wiLFxuICAgICAgIFwibGlua1wiOiBcIiNcIlxuICAgICAgfVxuICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgIFwiaWRcIjogMixcbiAgICAgXCJ0aXRsZVwiOiBcIkNvbW11bml0eVwiLFxuICAgICBcImxpc3RcIjogW1xuICAgICAge1xuICAgICAgIFwidGl0bGVcIjogXCJPdXIgUGFydG5lclwiLFxuICAgICAgIFwibGlua1wiOiBcIiNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICBcInRpdGxlXCI6IFwiQmVjb21lIGEgUGFydG5lclwiLFxuICAgICAgIFwibGlua1wiOiBcIiNcIlxuICAgICAgfVxuICAgICBdXG4gICAgfVxuICAgXVxuICB9LFxuICBcIm1pc2NcIjoge1xuICAgXCJsb2dvXCI6IFtcIlZldFwiLCBcImNhcmVcIl0sXG4gICBcImNvcHlyaWdodFwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIkNvcHlyaWdodFwiLFxuICAgIFwic3ltYm9sXCI6IFwiXHUwMEE5XCIsXG4gICAgXCJzdGFydFwiOiBcIjIwMjFcIixcbiAgICBcImVuZFwiOiBcImN1cnJlbnRcIlxuICAgfSxcbiAgIFwiYXV0aG9yXCI6IFwiSG9vQmFuay5cIixcbiAgIFwicmVzZXJ2ZWRcIjogXCJBbGwgUmlnaHRzIFJlc2VydmVkLlwiLFxuICAgXCJwaG9uZXNcIjogW1wiXCIsIFwiXCJdLFxuICAgXCJub2pzXCI6IFwiWW91IG5lZWQgdG8gZW5hYmxlIEphdmFTY3JpcHQgdG8gcnVuIHRoaXMgYXBwLlwiXG4gIH1cbiB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXHByb2plY3RzXFxcXGhvb2JhbmtcXFxcc3JjXFxcXGFwcFxcXFxmdW5jXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxob29iYW5rXFxcXHNyY1xcXFxhcHBcXFxcZnVuY1xcXFxwYXRocy1jb25jYXQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3RzL2hvb2Jhbmsvc3JjL2FwcC9mdW5jL3BhdGhzLWNvbmNhdC50c1wiO2ltcG9ydCB7IG5vcm1hbGl6ZVBhdGggfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyByZXNvbHZlLCBqb2luIH0gZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlUGF0aHMgPSAoc3RyQXJyOiBzdHJpbmdbXSkgPT5cclxuICBub3JtYWxpemVQYXRoKHJlc29sdmUoLi4uc3RyQXJyKSk7XHJcblxyXG5leHBvcnQgY29uc3Qgam9pblBhdGhzID0gKHN0ckFycjogc3RyaW5nW10pID0+XHJcbiAgam9pbiguLi5zdHJBcnIpLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXHByb2plY3RzXFxcXGhvb2JhbmtcXFxcc3JjXFxcXGFwcFxcXFxkZWZcXFxcYmFzZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxccHJvamVjdHNcXFxcaG9vYmFua1xcXFxzcmNcXFxcYXBwXFxcXGRlZlxcXFxiYXNlXFxcXGRpci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovcHJvamVjdHMvaG9vYmFuay9zcmMvYXBwL2RlZi9iYXNlL2Rpci50c1wiOy8qIHByZXR0aWVyLWlnbm9yZSAqL1xuZXhwb3J0IGNvbnN0IGRpciA9IHtcbiAgaW46IHtcbiAgICBhc3NldHM6ICAgICBcImFzc2V0c1wiLFxuICAgIGltZzogICAgICAgIFwiaW1nXCIsXG4gICAgc3R5bGVzOiAgICAgXCJzdHlsZXNcIixcbiAgICBpY29uczogICAgICBcImljb25zXCIsXG4gICAgc3ZnOiAgICAgICAgXCJzdmdcIixcbiAgICBzcmM6ICAgICAgICBcInNyY1wiLFxuICAgIGNzczogICAgICAgIFwiY3NzXCIsXG4gICAganM6ICAgICAgICAgXCJqc1wiLFxuICAgIHRtcGw6ICAgICAgIFwidmlldy10bXBsXCIsXG4gICAgZGF0YTogICAgICAgXCJkYXRhXCIsXG4gICAgZm9udHM6ICAgICAgXCJmb250c1wiLFxuICAgIHBpYzogICAgICAgIFwicGljXCIsXG4gICAgcGljU3JjOiAgICAgXCJwaWMtc3JjXCIsXG4gIH0sXG5cbiAgb3V0OiB7XG4gICAgYXNzZXRzOiAgICAgXCJhc3NldHNcIixcbiAgICBpbWc6ICAgICAgICBcImltZ1wiLFxuICAgIHBpYzogICAgICAgIFwicGljXCIsXG4gICAgc3R5bGVzOiAgICAgXCJjc3NcIixcbiAgICBpY29uczogICAgICBcImljb25zXCIsXG4gICAgc3ZnOiAgICAgICAgXCJzdmdcIixcbiAgICBidWlsZDogICAgICBcImJ1aWxkXCIsXG4gICAgZGlzdDogICAgICAgXCJkaXN0XCIsXG4gICAgZm9udHM6ICAgICAgXCJmb250c1wiLFxuICAgIGNzczogICAgICAgIFwiY3NzXCIsXG4gICAganM6ICAgICAgICAgXCJqc1wiLFxuICB9XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxob29iYW5rXFxcXHNyY1xcXFxhcHBcXFxcZGVmXFxcXGJhc2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHByb2plY3RzXFxcXGhvb2JhbmtcXFxcc3JjXFxcXGFwcFxcXFxkZWZcXFxcYmFzZVxcXFxmaWxlcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovcHJvamVjdHMvaG9vYmFuay9zcmMvYXBwL2RlZi9iYXNlL2ZpbGVzLnRzXCI7LyogcHJldHRpZXItaWdub3JlICovXHJcbmV4cG9ydCBjb25zdCBmaWxlcyA9IHtcclxuICBtYW5pZmVzdDogICAgICBcIm1hbmlmZXN0Lmpzb25cIixcclxuICByb2JvdHM6ICAgICAgICBcInJvYm90cy50eHRcIixcclxuICBmYXZpY29uOiAgICAgICBcImZhdmljb24uaWNvXCIsXHJcbiAgYnJvd3NlcmNvbmZpZzogXCJicm93c2VyY29uZmlnLnhtbFwiLFxyXG4gIHR3Q29uZmlnOiAgICAgIFwidGFpbHdpbmQuY29uZmlnLnRzXCIsXHJcbiAgbmFtZUV4dDogICAgICAgXCJbbmFtZV0uW2V4dF1cIixcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxob29iYW5rXFxcXHNyY1xcXFxhcHBcXFxcZGVmXFxcXGJhc2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHByb2plY3RzXFxcXGhvb2JhbmtcXFxcc3JjXFxcXGFwcFxcXFxkZWZcXFxcYmFzZVxcXFxleHQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3RzL2hvb2Jhbmsvc3JjL2FwcC9kZWYvYmFzZS9leHQudHNcIjsvKiBwcmV0dGllci1pZ25vcmUgKi9cclxuZXhwb3J0IGNvbnN0IGV4dCA9IHtcclxuICBwdWc6ICAgXCJwdWdcIixcclxuICBqczogICAgXCJqc1wiLFxyXG4gIG1qczogICBcIm1qc1wiLFxyXG4gIGpzeDogICBcImpzeFwiLFxyXG4gIG1qc3g6ICBcIm1qc3hcIixcclxuICB0czogICAgXCJ0c1wiLFxyXG4gIG10czogICBcIm10c1wiLFxyXG4gIHRzeDogICBcInRzeFwiLFxyXG4gIG10c3g6ICBcIm10c3hcIixcclxuICBqc29uOiAgXCJqc29uXCIsXHJcbiAgc2NzczogIFwic2Nzc1wiLFxyXG4gIHNhc3M6ICBcInNhc3NcIixcclxuICBjc3M6ICAgXCJjc3NcIixcclxuICBsZXNzOiAgXCJsZXNzXCIsXHJcbiAgc3R5bDogIFwic3R5bFwiLFxyXG4gIGh0bWw6ICBcImh0bWxcIixcclxuICBodG06ICAgXCJodG1cIixcclxuICBwaWM6ICAgXCJwaWNcIixcclxuICBlanM6ICAgXCJlanNcIixcclxuICBtZDogICAgXCJtZFwiXHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVAsU0FBUyxlQUFlLFdBQVc7QUFDdFIsU0FBZSxRQUFBQSxhQUFxQjtBQUNwQyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBaUQ7QUFDMUQsU0FBUyxzQkFBc0I7QUFDL0IsT0FBTyxVQUFVO0FBQ2pCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsd0JBQXdCO0FBQ2pDLE9BQU8sbUJBQW1CO0FBRTFCLFNBQVMsa0JBQWtCO0FBRTNCLE9BQU8sZ0JBQWdCO0FBRXZCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sbUJBQW1COzs7QUNmMUI7QUFBQSxFQUNDLFFBQVU7QUFBQSxJQUNULFNBQVc7QUFBQSxJQUNYLGVBQWlCO0FBQUEsSUFDakIsZUFBaUI7QUFBQSxJQUNqQixhQUFlO0FBQUEsRUFDaEI7QUFBQSxFQUVBLE1BQVE7QUFBQSxJQUNQO0FBQUEsTUFDQyxJQUFNO0FBQUEsTUFDTixPQUFTO0FBQUEsTUFDVCxNQUFRO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxNQUNDLElBQU07QUFBQSxNQUNOLE9BQVM7QUFBQSxNQUNULE1BQVE7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0MsSUFBTTtBQUFBLE1BQ04sT0FBUztBQUFBLE1BQ1QsTUFBUTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxJQUFNO0FBQUEsTUFDTixPQUFTO0FBQUEsTUFDVCxNQUFRO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxNQUNDLElBQU07QUFBQSxNQUNOLE9BQVM7QUFBQSxNQUNULE1BQVE7QUFBQSxJQUNUO0FBQUEsRUFDRDtBQUFBLEVBRUEsVUFBWTtBQUFBLElBQ1gsUUFBVTtBQUFBLE1BQ1QsT0FBUztBQUFBLE1BQ1QsT0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVBLFNBQVc7QUFBQSxNQUNWLE9BQVM7QUFBQSxNQUNULE9BQVM7QUFBQSxNQUNULFNBQVcsQ0FBQyxnQkFBZ0Isa0JBQWtCO0FBQUEsSUFDL0M7QUFBQSxJQUVBLE9BQVM7QUFBQSxNQUNSLEtBQU87QUFBQSxNQUNQLE9BQVM7QUFBQSxNQUNULFVBQVk7QUFBQSxRQUNYO0FBQUEsVUFDQyxJQUFNO0FBQUEsVUFDTixPQUFTO0FBQUEsVUFDVCxPQUFTO0FBQUEsVUFDVCxNQUFRO0FBQUEsWUFDUCxNQUFRO0FBQUEsWUFDUixPQUFTO0FBQUEsWUFDVCxRQUFVO0FBQUEsVUFDWDtBQUFBLFFBQ0Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxJQUFNO0FBQUEsVUFDTixPQUFTO0FBQUEsVUFDVCxPQUFTO0FBQUEsVUFDVCxNQUFRO0FBQUEsWUFDUCxNQUFRO0FBQUEsWUFDUixPQUFTO0FBQUEsWUFDVCxRQUFVO0FBQUEsVUFDWDtBQUFBLFFBQ0Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxJQUFNO0FBQUEsVUFDTixPQUFTO0FBQUEsVUFDVCxPQUFTO0FBQUEsVUFDVCxNQUFRO0FBQUEsWUFDUCxNQUFRO0FBQUEsWUFDUixPQUFTO0FBQUEsWUFDVCxRQUFVO0FBQUEsVUFDWDtBQUFBLFFBQ0Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxJQUFNO0FBQUEsVUFDTixPQUFTO0FBQUEsVUFDVCxPQUFTO0FBQUEsVUFDVCxNQUFRO0FBQUEsWUFDUCxNQUFRO0FBQUEsWUFDUixPQUFTO0FBQUEsWUFDVCxRQUFVO0FBQUEsVUFDWDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0EsVUFBWTtBQUFBLE1BQ1gsS0FBTztBQUFBLE1BQ1AsT0FBUztBQUFBLE1BQ1QsT0FBUztBQUFBLE1BQ1QsTUFBUTtBQUFBLFFBQ1AsT0FBUztBQUFBLFFBQ1QsTUFBUTtBQUFBLFFBQ1IsS0FBTztBQUFBLFFBQ1AsT0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNBLFVBQVk7QUFBQSxRQUNYO0FBQUEsVUFDQyxJQUFNO0FBQUEsVUFDTixPQUFTO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNDLElBQU07QUFBQSxVQUNOLE9BQVM7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0MsSUFBTTtBQUFBLFVBQ04sT0FBUztBQUFBLFFBQ1Y7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0EsTUFBUTtBQUFBLE1BQ1AsS0FBTztBQUFBLE1BQ1AsT0FBUztBQUFBLE1BQ1QsVUFBWTtBQUFBLFFBQ1g7QUFBQSxVQUNDLElBQU07QUFBQSxVQUNOLE9BQVM7QUFBQSxVQUNULE9BQVM7QUFBQSxVQUNULEtBQU87QUFBQSxZQUNOLEtBQU87QUFBQSxVQUNSO0FBQUEsUUFDRDtBQUFBLFFBQ0E7QUFBQSxVQUNDLElBQU07QUFBQSxVQUNOLE9BQVM7QUFBQSxVQUNULE9BQVM7QUFBQSxVQUNULEtBQU87QUFBQSxZQUNOLEtBQU87QUFBQSxVQUNSO0FBQUEsUUFDRDtBQUFBLFFBQ0E7QUFBQSxVQUNDLElBQU07QUFBQSxVQUNOLE9BQVM7QUFBQSxVQUNULE9BQVM7QUFBQSxVQUNULEtBQU87QUFBQSxZQUNOLEtBQU87QUFBQSxVQUNSO0FBQUEsUUFDRDtBQUFBLFFBQ0E7QUFBQSxVQUNDLElBQU07QUFBQSxVQUNOLE9BQVM7QUFBQSxVQUNULE9BQVM7QUFBQSxVQUNULEtBQU87QUFBQSxZQUNOLEtBQU87QUFBQSxVQUNSO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQSxVQUFZO0FBQUEsTUFDWCxPQUFTO0FBQUEsTUFDVCxPQUFTO0FBQUEsTUFDVCxNQUFRO0FBQUEsUUFDUCxPQUFTO0FBQUEsUUFDVCxNQUFRO0FBQUEsUUFDUixLQUFPO0FBQUEsUUFDUCxPQUFTO0FBQUEsTUFDVjtBQUFBLElBQ0Q7QUFBQSxJQUNBLFFBQVU7QUFBQSxNQUNULFVBQVk7QUFBQSxRQUNYO0FBQUEsVUFDQyxJQUFNO0FBQUEsVUFDTixPQUFTO0FBQUEsVUFDVCxPQUFTO0FBQUEsVUFDVCxNQUFRO0FBQUEsWUFDUDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsVUFDQSxPQUFTO0FBQUEsWUFDUixVQUFZO0FBQUEsWUFDWixPQUFTO0FBQUEsWUFDVCxRQUFVO0FBQUEsVUFDWDtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ1AsT0FBUztBQUFBLFlBQ1QsTUFBUTtBQUFBLFlBQ1IsS0FBTztBQUFBLFlBQ1AsT0FBUztBQUFBLFVBQ1Y7QUFBQSxRQUNEO0FBQUEsUUFDQTtBQUFBLFVBQ0MsSUFBTTtBQUFBLFVBQ04sT0FBUztBQUFBLFVBQ1QsT0FBUztBQUFBLFVBQ1QsTUFBUTtBQUFBLFlBQ1A7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsVUFDQSxPQUFTO0FBQUEsWUFDUixVQUFZO0FBQUEsWUFDWixPQUFTO0FBQUEsWUFDVCxRQUFVO0FBQUEsVUFDWDtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ1AsT0FBUztBQUFBLFlBQ1QsTUFBUTtBQUFBLFlBQ1IsS0FBTztBQUFBLFlBQ1AsT0FBUztBQUFBLFVBQ1Y7QUFBQSxRQUNEO0FBQUEsUUFDQTtBQUFBLFVBQ0MsSUFBTTtBQUFBLFVBQ04sT0FBUztBQUFBLFVBQ1QsT0FBUztBQUFBLFVBQ1QsTUFBUTtBQUFBLFlBQ1A7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFVBQ0EsT0FBUztBQUFBLFlBQ1IsVUFBWTtBQUFBLFlBQ1osT0FBUztBQUFBLFlBQ1QsUUFBVTtBQUFBLFVBQ1g7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNQLE9BQVM7QUFBQSxZQUNULE1BQVE7QUFBQSxZQUNSLEtBQU87QUFBQSxZQUNQLE9BQVM7QUFBQSxVQUNWO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQSxRQUFVO0FBQUEsTUFDVCxPQUFTLENBQUMsSUFBSSxFQUFFO0FBQUEsTUFDaEIsT0FBUztBQUFBLE1BQ1QsVUFBWTtBQUFBLFFBQ1g7QUFBQSxVQUNDLElBQU07QUFBQSxVQUNOLE9BQVM7QUFBQSxVQUNULE1BQVE7QUFBQSxZQUNQO0FBQUEsY0FDQyxPQUFTO0FBQUEsY0FDVCxNQUFRO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxjQUNDLE9BQVM7QUFBQSxjQUNULE1BQVE7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLGNBQ0MsT0FBUztBQUFBLGNBQ1QsTUFBUTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsY0FDQyxPQUFTO0FBQUEsY0FDVCxNQUFRO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxjQUNDLE9BQVM7QUFBQSxjQUNULE1BQVE7QUFBQSxZQUNUO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxJQUFNO0FBQUEsVUFDTixPQUFTO0FBQUEsVUFDVCxNQUFRO0FBQUEsWUFDUDtBQUFBLGNBQ0MsT0FBUztBQUFBLGNBQ1QsTUFBUTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsY0FDQyxPQUFTO0FBQUEsY0FDVCxNQUFRO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxjQUNDLE9BQVM7QUFBQSxjQUNULE1BQVE7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLGNBQ0MsT0FBUztBQUFBLGNBQ1QsTUFBUTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsY0FDQyxPQUFTO0FBQUEsY0FD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
