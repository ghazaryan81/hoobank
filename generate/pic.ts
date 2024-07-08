import path from "path";
import sharp from "sharp";
import fs, { readFile } from "fs";
import { dir } from "../src/app/def/base/dir";

const {
 in: { assets: assetsIn, src: srcIn, img: imgIn, picSrc, pic: picIn }
} = dir;

const pic = {
 /* ============== md size ============== */
 md: [
  {
   name: "favicon-16x16.pic.png",
   size: { width: 16, height: 16 }
  },
  {
   name: "favicon-32x32.pic.png",
   size: { width: 32, height: 32 }
  },
  {
   name: "android-chrome-36x36.pic.png",
   size: { width: 36, height: 36 }
  },
  {
   name: "android-chrome-48x48.pic.png",
   size: { width: 48, height: 48 }
  },
  {
   name: "android-chrome-48x48.pic.png",
   size: { width: 48, height: 48 }
  },
  {
   name: "apple-touch-icon-57x57.pic.png",
   size: { width: 57, height: 57 }
  },
  {
   name: "apple-touch-icon-58x58.pic.png",
   size: { width: 58, height: 58 }
  },
  {
   name: "apple-icon-60x60.pic.png",
   size: { width: 60, height: 60 }
  },
  {
   name: "apple-touch-icon-60x60.pic.png",
   size: { width: 60, height: 60 }
  },
  {
   name: "msapplicationSquare70x70logo.pic.png",
   size: { width: 60, height: 60 }
  },
  {
   name: "ms-icon-70x70.pic.png",
   size: { width: 70, height: 70 }
  },
  {
   name: "mstile-70x70.pic.png",
   size: { width: 70, height: 70 }
  },
  {
   name: "android-chrome-72x72.pic.png",
   size: { width: 72, height: 72 }
  },
  {
   name: "android-icon-72x72.pic.png",
   size: { width: 72, height: 72 }
  },
  {
   name: "apple-icon-72x72.pic.png",
   size: { width: 72, height: 72 }
  },
  {
   name: "apple-touch-icon-72x72.pic.png",
   size: { width: 72, height: 72 }
  },
  {
   name: "apple-icon-76x76.pic.png",
   size: { width: 76, height: 76 }
  },
  {
   name: "apple-touch-icon-76x76.pic.png",
   size: { width: 76, height: 76 }
  },
  {
   name: "apple-touch-icon-40x40.pic.png",
   size: { width: 40, height: 40 }
  },
  {
   name: "apple-touch-icon-80x80.pic.png",
   size: { width: 80, height: 80 }
  },
  {
   name: "apple-touch-icon-87x87.pic.png",
   size: { width: 87, height: 87 }
  },
  {
   name: "favicon-without-bg.pic.png",
   size: { width: 93, height: 105 }
  },
  {
   name: "android-chrome-96x96.pic.png",
   size: { width: 96, height: 96 }
  },
  {
   name: "android-icon-96x96.pic.png",
   size: { width: 96, height: 96 }
  },
  {
   name: "favicon-96x96.pic.png",
   size: { width: 96, height: 96 }
  },
  {
   name: "favicon-with-bg.pic.png",
   size: { width: 96, height: 96 }
  },
  {
   name: "apple-icon-114x114.pic.png",
   size: { width: 114, height: 114 }
  },
  {
   name: "apple-touch-icon-114x114.pic.png",
   size: { width: 114, height: 114 }
  },
  {
   name: "apple-icon-120x120.pic.png",
   size: { width: 120, height: 120 }
  },
  {
   name: "apple-touch-icon-120x120.pic.png",
   size: { width: 120, height: 120 }
  },
  {
   name: "favicon-128x128.pic.png",
   size: { width: 128, height: 128 }
  },
  {
   name: "mstile-small.pic.png",
   size: { width: 128, height: 128 }
  }
 ],
 /* ============== lg size ============== */
 lg: [
  {
   name: "favicon-128x128.pic.png",
   size: { width: 128, height: 128 }
  },
  {
   name: "mstile-small.pic.png",
   size: { width: 128, height: 128 }
  },
  {
   name: "android-chrome-144x144.pic.png",
   size: { width: 144, height: 144 }
  },
  {
   name: "android-icon-144x144.pic.png",
   size: { width: 144, height: 144 }
  },
  {
   name: "apple-icon-144x144.pic.png",
   size: { width: 144, height: 144 }
  },
  {
   name: "apple-touch-icon-144x144.pic.png",
   size: { width: 144, height: 144 }
  },
  {
   name: "ms-icon-144x144.pic.png",
   size: { width: 144, height: 144 }
  },
  {
   name: "msapplicationSquare150x150logo.pic.png",
   size: { width: 144, height: 144 }
  },
  {
   name: "ms-icon-150x150.pic.png",
   size: { width: 150, height: 150 }
  },
  {
   name: "mstile-150x150.pic.png",
   size: { width: 150, height: 150 }
  },
  {
   name: "apple-icon-152x152.pic.png",
   size: { width: 152, height: 152 }
  },
  {
   name: "apple-touch-icon-152x152.pic.png",
   size: { width: 152, height: 152 }
  },
  {
   name: "favicon-160x160.pic.png",
   size: { width: 160, height: 160 }
  },
  {
   name: "apple-touch-icon-167x167.pic.png",
   size: { width: 167, height: 167 }
  },
  {
   name: "apple-touch-icon-168x168.pic.png",
   size: { width: 168, height: 168 }
  },
  {
   name: "apple-icon-180x180.pic.png",
   size: { width: 180, height: 180 }
  },
  {
   name: "apple-touch-icon.pic.png",
   size: { width: 180, height: 180 }
  },
  {
   name: "apple-touch-icon-180x180.pic.png",
   size: { width: 180, height: 180 }
  },
  {
   name: "apple-touch-icon-precomposed.pic.png",
   size: { width: 180, height: 180 }
  },
  {
   name: "android-chrome-192x192.pic.png",
   size: { width: 192, height: 192 }
  },
  {
   name: "android-icon-192x192.pic.png",
   size: { width: 192, height: 192 }
  },
  {
   name: "apple-icon.pic.png",
   size: { width: 192, height: 192 }
  },
  {
   name: "apple-icon-precomposed.pic.png",
   size: { width: 192, height: 192 }
  },
  {
   name: "favicon-192x192.pic.png",
   size: { width: 192, height: 192 }
  },
  {
   name: "favicon-194x194.pic.png",
   size: { width: 194, height: 194 }
  },
  {
   name: "favicon-196x196.pic.png",
   size: { width: 196, height: 196 }
  }
 ],
 /* ============== xl size ============== */
 xl: [
  {
   name: "msapplicationSquare256x256logo.pic.png",
   size: { width: 256, height: 256 }
  },
  {
   name: "mstile-medium.pic.png",
   size: { width: 270, height: 270 }
  },
  {
   name: "msapplicationWide310x150logo.pic.png",
   size: { width: 300, height: 150 }
  },
  {
   name: "mstile-310x150.pic.png",
   size: { width: 310, height: 150 }
  },
  {
   name: "msapplicationSquare310x310logo.pic.png",
   size: { width: 310, height: 310 }
  },
  {
   name: "ms-icon-310x310.pic.png",
   size: { width: 310, height: 310 }
  },
  {
   name: "mstile-310x310.pic.png",
   size: { width: 310, height: 310 }
  },
  {
   name: "apple-touch-icon-384x384.pic.png",
   size: { width: 384, height: 384 }
  },
  {
   name: "apple-touch-icon-512x512.pic.png",
   size: { width: 512, height: 512 }
  },
  {
   name: "mstile-wide.pic.png",
   size: { width: 558, height: 270 }
  },
  {
   name: "mstile-large.pic.png",
   size: { width: 558, height: 558 }
  },
  {
   name: "apple-touch-icon-1024x1024.pic.png",
   size: { width: 1024, height: 1024 }
  }
 ]
};
let index = 0;
for (const key in pic) {
 index++;
 pic[key].forEach(({ name, size: { width, height } }) => {
  readFile(
   `./${srcIn}/${assetsIn}/${imgIn}/${picSrc}/${index}.png`,
   function (error, data) {
    sharp(data)
     .png({ compressionLevel: 5 })
     .resize({
      width,
      height
     })
     .toFile(`./${srcIn}/${assetsIn}/${imgIn}/${picIn}/${name}`);
   }
  );
 });
}
