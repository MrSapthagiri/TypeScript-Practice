const grid = [
[0,0,1,0],
[0,0,0,0],
[1,0,1,0],
[0,0,0,0]
];
const rows = grid.length, cols = grid[0].length;


function shortestPath(sr:number, sc:number, tr:number, tc:number) {
const q: [number,number,number][] = [[sr,sc,0]];
const seen = new Set<string>([`${sr},${sc}`]);
const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
while (q.length) {
const [r,c,d] = q.shift()!;
if (r===tr && c===tc) return d;
for (const [dr,dc] of dirs) {
const nr = r+dr, nc = c+dc;
if (nr<0||nc<0||nr>=rows||nc>=cols) continue;
if (grid[nr][nc] === 1) continue; // blocked
const key = `${nr},${nc}`;
if (seen.has(key)) continue;
seen.add(key);
q.push([nr,nc,d+1]);
}
}
return -1;
}


console.log('Distance', shortestPath(0,0,3,3));