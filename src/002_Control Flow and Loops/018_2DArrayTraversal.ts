for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) row.push(i * 3 + j + 1);
    console.log(row.join(" "));
}
