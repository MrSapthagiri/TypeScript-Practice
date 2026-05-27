const str = "TypeScript with playground";   
let count = 0;

for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) count++;
}
console.log(`Vowels: ${count}`);
