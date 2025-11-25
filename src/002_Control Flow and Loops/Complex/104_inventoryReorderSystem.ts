type Stock = { sku:string, qty:number, reorderLevel:number };
const stocks: Stock[] = [
{ sku:'A', qty:5, reorderLevel:10 },
{ sku:'B', qty:50, reorderLevel:20 },
{ sku:'C', qty:2, reorderLevel:5 }
];


function planReorder(items: Stock[]) {
const orders: Record<string,number> = {};
for (const it of items) {
	if (it.qty < it.reorderLevel) {
		const needed = it.reorderLevel * 2 - it.qty; // rule: top-up to 2x level
		orders[it.sku] = needed;
	}
}
return orders;
}
