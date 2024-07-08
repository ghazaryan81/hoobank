import fs from "fs";
import { dir } from "../src/app/def/base/dir";
import { files } from "../src/app/def/base/files";
import { s } from "../src/app/types";

/* prettier-ignore */
const tags = [
 { name: "square70x70logo",   src: "msapplicationSquare70x70logo.pic.png" },
 { name: "square150x150logo", src: "msapplicationSquare150x150logo.pic.png" },
 { name: "square150x150logo", src: "msapplicationSquare150x150logo.pic.png" },
 { name: "square310x310logo", src: "msapplicationSquare310x310logo.pic.png" },
 { name: "wide310x150logo",   src: "msapplicationWide310x150logo.pic.png" }
];

const xml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
 <msapplication>
  <tile>
    ${tags.reduce((acc: s, { name, src }) => acc + `<${name} src="/${dir.out.assets}/${dir.out.img}/${dir.out.pic}/${src}" />\n`, "")}
   <TileColor>#ffffff</TileColor>
  </tile>
 </msapplication>
</browserconfig>
`;

fs.writeFile(
 `./${dir.in.src}/${dir.in.assets}/${files.browserconfig}`,
 `${xml}`,
 (err) => {
  // console.log(err);
 }
);
