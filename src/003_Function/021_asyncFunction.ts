// 1. Create an async named function to fetch user data.
async function fetchUser(): Promise<string> {
    return "User loaded";
}
fetchUser().then(data => console.log(data));

// 2. Create an async named function to fetch orders.
async function fetchOrders(): Promise<string> {
    return "Orders loaded";
}
fetchOrders().then(data => console.log(data));

// 3. Create an async named function to fetch products.
async function fetchProducts(): Promise<string> {
    return "Products loaded";
}
fetchProducts().then(data => console.log(data));

// 4. Create an async named function to fetch reports.
async function fetchReports(): Promise<string> {
    return "Reports loaded";
}
fetchReports().then(data => console.log(data));

// 5. Create an async named function to fetch settings.
async function fetchSettings(): Promise<string> {
    return "Settings loaded";
}
fetchSettings().then(data => console.log(data));
