import path from "node:path";
import fs, { readFile } from "node:fs";
import sharp from "sharp";

import { dir } from "../src/app/def/base/dir";
import { layoutSizes } from "../src/app/def/base/layout-sizes";

const {
 in: { assets: assetsIn, src: srcIn, img: imgIn, picSrc, pic: picIn }
} = dir;

const dirPath = "./src/assets/img/tmp/sections";

fs.readdir(dirPath, (error, items) => {
 //
 if (error) {
  console.error("Error reading directory:", error);
  return;
 }

 new Promise(function (resolve, reject) {
  let sectionInfo: { filePath: string; height: string | number | undefined }[] = [];
  let index = 0;
  for (const item of items) {
   const filePath = path.join(dirPath, item);
   sharp(filePath)
    .metadata()
    .then(({ height }) => {
     sectionInfo[index] = { filePath, height };
     index++;
    });
  }
 });
});
