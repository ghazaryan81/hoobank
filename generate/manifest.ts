import fs from "fs";
import { files } from "../src/app/def/base/files";
import { dir } from "../src/app/def/base/dir";

const { manifest } = files;

const {
 in: { assets: assetsIn, src: srcIn },
 out: { assets: assetsOut, img: imgOut, pic: picOut }
} = dir;

export const picFiles = [
 {
  "src": "apple-touch-icon-512x512.pic.png",
  "size": "512x512"
 },
 {
  "src": "apple-touch-icon-384x384.pic.png",
  "size": "384x384"
 },
 {
  "src": "msapplicationSquare256x256logo.pic.png",
  "size": "256x256"
 },
 {
  "src": "android-icon-192x192.pic.png",
  "size": "192x192"
 },
 {
  "src": "apple-icon-180x180.pic.png",
  "size": "180x180"
 },
 {
  "src": "apple-touch-icon-168x168.pic.png",
  "size": "168x168"
 },
 {
  "src": "apple-icon-152x152.pic.png",
  "size": "152x152"
 },
 {
  "src": "android-chrome-144x144.pic.png",
  "size": "144x144"
 },
 {
  "src": "favicon-128x128.pic.png",
  "size": "128x128"
 },
 {
  "src": "apple-icon-120x120.pic.png",
  "size": "120x120"
 },
 {
  "src": "apple-icon-114x114.pic.png",
  "size": "114x114"
 },
 {
  "src": "android-chrome-96x96.pic.png",
  "size": "96x96"
 },
 {
  "src": "apple-icon-76x76.pic.png",
  "size": "76x76"
 },
 {
  "src": "android-chrome-72x72.pic.png",
  "size": "72x72"
 },
 {
  "src": "apple-icon-60x60.pic.png",
  "size": "60x60"
 },
 {
  "src": "apple-icon-57x57.pic.png",
  "size": "57x57"
 },
 {
  "src": "android-chrome-48x48.pic.png",
  "size": "48x48"
 },
 {
  "src": "favicon-32x32.pic.png",
  "size": "32x32"
 },
 {
  "src": "favicon-16x16.pic.png",
  "size": "16x16"
 }
];

/* prettier-ignore */
const generate = {
 "name":             "Project",
 "short_name":       "Project",
 "display":          "browser",
 "background_color": "#fff",
 "description":      "Project",
 "dir":              "ltr",
 "categories":       "Project",
 "lang":             "en",
 "orientation":      "any",
 "scope":            "/",
 "theme_color":      "#ffffff",
 "icons": picFiles.map(({src, size}) => ({
		src:`/${assetsOut}/${imgOut}/${picOut}/${src}`,
  size,
  type:"image/png",
	}))
};

fs.writeFile(
 `./${srcIn}/${assetsIn}/${manifest}`,
 `${JSON.stringify(generate, null, 1)}`,
 (e) => {}
);
