const fs = require("fs");
const path = require("path");

const distDir = path.resolve(__dirname, 'dist');
const scriptsDir = path.resolve(__dirname, 'scripts');

console.log(scriptsDir);
const scripts = [
    `/index.js`,
    `/translations.js`,
    `/navigate.js`,
    `/boost.js`,
    `/actives.js`,
    `/airdrop.js`,
];

let bundle = "";

for (let script of scripts) {
    let content = fs.readFileSync(`${scriptsDir}${script}`).toString();
    content = content.replace(/(    |\r\n|\n|\r|\t)/gm, "");
    bundle += content;
}

fs.mkdir(distDir, () => {});
fs.writeFileSync(distDir + '/bundle.min.js', Buffer.from(bundle));