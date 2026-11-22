import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const htmlPath = path.join(root, "dist", "index.html");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

let html = await readFile(htmlPath, "utf8");
const marker = '<div id="root"></div>';

if (!html.includes(marker)) {
    throw new Error(`Prerender failed: ${marker} not found in dist/index.html`);
}

html = html.replace(marker, `<div id="root">${appHtml}</div>`);
await writeFile(htmlPath, html, "utf8");

console.log(
    `Prerendered ${appHtml.length.toLocaleString()} characters into dist/index.html`
);
