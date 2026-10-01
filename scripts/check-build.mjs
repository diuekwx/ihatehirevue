import {readdir,readFile} from 'node:fs/promises';import {execFileSync} from 'node:child_process';import {games} from '../dist/src/catalog.js';
async function check(dir){for(const ent of await readdir(dir,{withFileTypes:true})){const path=dir+'/'+ent.name;if(ent.isDirectory())await check(path);else if(path.endsWith('.js'))execFileSync(process.execPath,['--check',path]);}}
await check('dist');for(const g of games){const mod=await import(`../dist/src/games/${g.id}.js`);if(typeof mod.mountGame!=='function')throw Error(`Missing game ${g.id}`);}
const html=await readFile('dist/index.html','utf8');for(const asset of ['/src/app.js','/src/styles.css']){if(!html.includes(asset))throw Error('Missing asset');await readFile('dist'+asset);}
console.log('Build verified: 13 game modules, JavaScript syntax, and entry assets. Static output: dist/');
