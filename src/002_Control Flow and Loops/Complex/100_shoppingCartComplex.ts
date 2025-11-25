type Product = { sku: string; name: string; price: number; stock: number; categories: string[] };
const catalog: Product[] = [
{ sku: 'P1', name: 'Phone', price: 25000, stock: 10, categories: ['electronics'] },
{ sku: 'P2', name: 'Headset', price: 1500, stock: 20, categories: ['electronics', 'accessories'] },
{ sku: 'P3', name: 'T-Shirt', price: 499, stock: 100, categories: ['clothing'] }
];


type CartItem = { sku: string; qty: number };
const cart: CartItem[] = [ { sku: 'P1', qty: 1 }, { sku: 'P2', qty: 2 }, { sku: 'P3', qty: 3 } ];


function findProduct(sku: string) { return catalog.find(p => p.sku === sku); }


function applyPromotions(items: CartItem[]) {
let subtotal = 0;
let discounts = 0;


// Bulk discount example: if qty >=3 on same product => 10% off that product
for (const it of items) {
const p = findProduct(it.sku);
if (!p) throw new Error('Product not found: ' + it.sku);
if (p.stock < it.qty) console.warn('Insufficient stock for', p.sku);


const line = p.price * it.qty;
let lineDiscount = 0;
if (it.qty >= 3) lineDiscount = line * 0.10;


// category combo discount: if cart has electronics and clothing => flat 5% on electronics
if (p.categories.includes('electronics')) {
const hasClothing = items.some(i => {
const cp = findProduct(i.sku); return cp && cp.categories.includes('clothing');
});
if (hasClothing) lineDiscount += line * 0.05;
}


subtotal += line;
discounts += lineDiscount;
console.log(`${p.name} x${it.qty}: ${line.toFixed(0)} (-${lineDiscount.toFixed(0)})`);
}


// coupon rules: apply highest priority coupon available
const coupons = [
{ code: 'WELCOME100', threshold: 2000, amount: 100 },
{ code: 'SAVE10P', threshold: 5000, percent: 10 }
];


let couponApplied = 0;
for (const c of coupons) {
if ('percent' in c && subtotal - discounts >= c.threshold) {
couponApplied = (subtotal - discounts) * (c.percent! / 100);
break;
}
if ('amount' in c && subtotal - discounts >= c.threshold) {
couponApplied = c.amount as number;
break;
}
}


const tax = (subtotal - discounts - couponApplied) * 0.12; // GST
const total = subtotal - discounts - couponApplied + tax;


console.log('\nSubtotal:', subtotal.toFixed(0));
console.log('Discounts:', discounts.toFixed(0));
console.log('Coupon:', couponApplied.toFixed(0));
console.log('Tax:', tax.toFixed(0));
console.log('Total:', total.toFixed(0));
}


applyPromotions(cart);
