import {readFileSync,writeFileSync} from 'node:fs';
import {render} from '../.prerender/entry-server.js';
const page=readFileSync('dist/index.html','utf8');
writeFileSync('dist/index.html',page.replace('<div id="root"></div>','<div id="root">'+render()+'</div>'));
console.log('Pre-rendered homepage for search engines and initial loading.');
