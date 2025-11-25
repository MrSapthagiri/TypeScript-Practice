const lines = [
'2025-11-01 INFO /api/login 200',
'2025-11-01 ERROR /api/order 500',
'2025-11-01 INFO /api/login 200',
'2025-11-02 ERROR /api/product 500',
'2025-11-02 INFO /api/product 200'
];


const counts: Record<string, {info:number;error:number}> = {};
for (const ln of lines) {
const [date, level, path, code] = ln.split(' ');
counts[date] = counts[date] || {info:0,error:0};
if (level === 'INFO') counts[date].info++;
else if (level === 'ERROR') counts[date].error++;
}


for (const d in counts) console.log(d, counts[d]);


// sliding error rate over days
const dates = Object.keys(counts).sort();
for (let i = 0; i < dates.length; i++) {
const window = dates.slice(Math.max(0, i-1), i+1);
let total = 0, errors = 0;
for (const w of window) { total += counts[w].info + counts[w].error; errors += counts[w].error; }
console.log('Window ending', dates[i], 'errorRate', (errors/total || 0).toFixed(2));
}
