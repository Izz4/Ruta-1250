// Ruta 1250 · armado de la app
// Junta src/template.html con los datos y escribe ../index.html (la app publicada).
// También renueva sw.js: VERSION (para que celulares y PCs bajen la versión nueva) y la lista de figuras.
// Uso, desde la carpeta del repo:   node src/construir.js
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const SRC = __dirname;
const RAIZ = path.join(SRC, "..");
const leer = f => fs.readFileSync(path.join(SRC, f), "utf8");

// Mismo orden que siempre: data, banco, escudo, figuras, temas y al final el banco Puro DECO.
const PARTES = ["data.js", "banco.js", "escudo.js", "figuras.js", "temas.js", "deco/banco-deco.js"];
const tpl = leer("template.html");
if (!tpl.includes("/*DATA*/")) throw new Error("template.html no tiene la marca /*DATA*/");
const html = tpl.replace("/*DATA*/", () => PARTES.map(leer).join("\n"));
fs.writeFileSync(path.join(RAIZ, "index.html"), html);

// sw.js
const version = crypto.createHash("sha1").update(Buffer.from(html, "utf8")).digest("hex").slice(0, 10);
const figuras = fs.readdirSync(path.join(RAIZ, "fig")).filter(f => !f.startsWith(".")).sort().map(f => "fig/" + f);
const swRuta = path.join(RAIZ, "sw.js");
let sw = fs.readFileSync(swRuta, "utf8");
const antes = (sw.match(/const VERSION="([^"]*)"/) || [])[1];
sw = sw.replace(/const VERSION="[^"]*";/, `const VERSION="${version}";`)
       .replace(/^const FIGURAS = \[.*\];$/m, "const FIGURAS = " + JSON.stringify(figuras).replace(/","/g, '", "') + ";");
fs.writeFileSync(swRuta, sw);

// Aviso de figuras que la app pide y no están en fig/
const ctx = {};
require("vm").runInNewContext(leer("figuras.js") + "\nthis.FIG=FIG;", ctx);
const faltan = [...new Set(Object.values(ctx.FIG))].filter(f => typeof f === "string" && f.startsWith("fig/") && !figuras.includes(f));

console.log(`Listo: index.html (${(html.length / 1e6).toFixed(2)} MB), ${figuras.length} figuras.`);
console.log(antes === version ? `VERSION sin cambios (${version}).` : `VERSION ${antes} → ${version}`);
if (faltan.length) console.log("OJO, faltan en fig/: " + faltan.join(", "));
