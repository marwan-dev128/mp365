const fs = require('fs');
const content = fs.readFileSync('solutions_overview.html', 'utf8');

// The carousel is around 540000 to 620000
const chunk = content.slice(530000, 620000);

const imgRegex = /<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/g;
const matches = [...chunk.matchAll(imgRegex)];
console.log('Images:');
matches.forEach(m => console.log(m[2], '->', m[1]));

const titleRegex = /card-title[^>]*>([\s\S]*?)<\/h3>|card-big-title[^>]*>([\s\S]*?)<\/h3>/g;
const titles = [...chunk.matchAll(titleRegex)];
console.log('\nTitles:');
titles.forEach(t => console.log((t[1] || t[2]).trim()));
