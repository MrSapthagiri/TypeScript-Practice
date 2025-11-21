function isStrong(password: string): boolean {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNum   = /\d/.test(password);
    const hasSpec  = /[!@#$%^&*]/.test(password);
    return password.length >= 8 && hasUpper && hasLower && hasNum && hasSpec;
}
console.log(isStrong("Aa1@abcd")); // true
