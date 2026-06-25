// 1. Create a named function with optional last name.
function fullName(first: string, last?: string): string {
    return last ? `${first} ${last}` : first;
}
console.log(fullName("John"));

// 2. Create a named function with optional state in address.
function buildAddress(city: string, state?: string): string {
    return state ? `${city}, ${state}` : city;
}
console.log(buildAddress("Chennai"));

// 3. Create a named function with optional phone number.
function formatPhone(countryCode: string, number?: string): string {
    return number ? `${countryCode}-${number}` : countryCode;
}
console.log(formatPhone("+91"));

// 4. Create a named function with optional age in profile.
function showProfile(name: string, age?: number): string {
    return age ? `${name} (${age})` : name;
}
console.log(showProfile("Giri"));

// 5. Create a named function with optional subtitle in label.
function createLabel(title: string, subtitle?: string): string {
    return subtitle ? `${title}: ${subtitle}` : title;
}
console.log(createLabel("QA Report"));
