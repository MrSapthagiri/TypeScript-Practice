const numsArr: number[] = [12, 45, 67, 23, 45];
let first = -Infinity, second = -Infinity;

for (let n of numsArr) {
    if (n > first) {
        second = first;
        first = n;
    } else if (n > second && n !== first) {
        second = n;
    }
}
console.log("Second largest:", second);
