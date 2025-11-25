for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) { isPrime = false; break; }
    }
    if (isPrime) console.log(num);
}
