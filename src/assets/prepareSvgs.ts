// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const imagePath = process.argv.slice(2);
const files = fs
  .readdirSync('./' + imagePath[0])
  .filter((x) => x.includes('svg'));
const ex = files
  .map((x) => `export {default as ${x.split('.svg')[0]}} from './${x}';`)
  .join('\n');
fs.writeFileSync('./' + imagePath[0] + '/index.ts', ex);
