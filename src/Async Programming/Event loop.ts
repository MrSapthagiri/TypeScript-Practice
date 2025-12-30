function serveCustomer(name: string): void {
  console.log(`Serving ${name}`);
}

// First customer (synchronous)
serveCustomer("Customer 1");

// Other customers wait in line (async)
setTimeout((): void => {
  serveCustomer("Customer 2");
}, 0);

setTimeout((): void => {
  serveCustomer("Customer 3");
}, 0);

// Output:
// Serving Customer 1
// Serving Customer 2
// Serving Customer 3