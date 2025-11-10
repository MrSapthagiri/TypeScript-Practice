const studentsList = [

{ id:1, name:'Arun', score: 72 },
{ id:2, name:'Priya', score: 88 },
{ id:3, name:'Vikram', score: 59 },
{ id:4, name:'Kavya', score: 94 },
{ id:5, name:'Raj', score: 68 }
];


// curved grading based on top score
function assignGrades(list: {id:number;name:string;score:number}[]) {
const sorted = [...list].sort((a,b)=>b.score-a.score);
const max = sorted[0].score;
for (const s of list) {
const percentOfTop = (s.score / max) * 100;
let grade = 'D';
if (percentOfTop >= 90) grade = 'A';
else if (percentOfTop >= 75) grade = 'B';
else if (percentOfTop >= 60) grade = 'C';
console.log(`${s.name} (${s.score}) => ${grade}`);
}
}


assignGrades(studentsList);