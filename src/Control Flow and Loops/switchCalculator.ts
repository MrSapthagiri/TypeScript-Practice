function calculate(a: number, b: number, op: string): number | string {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Cannot divide by zero";
        default:  return "Invalid operator";
    }
}
console.log(calculate(10, 5, '*'));
