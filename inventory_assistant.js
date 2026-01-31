// item name
let itemName = "Moon Lamp";
console.log(`Item Name: ${itemName}`);

// cost per unit
let unitCost = 18.88;

// how much stock is available
let currentStock = 70;

// threshsold to consider reordering
let reorderLevel = 50;

// desired on-hand after reorder
let targetStock = 500;

// units sold per week
let weeklyDemand = 200;

// weeks to receive an order
let supplierLeadTimeWeeks = 2;


// calculations for inventory metrics

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
console.log(`Weeks of Cover: ${weeksOfCover.toFixed(2)}`);

let stockDeficit = Math.max(0, targetStock - currentStock);

let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
console.log(`Recommended Reorder Quantity: ${reorderQuantity} units`);

let estimatedReorderCost = reorderQuantity * unitCost;
console.log(`Estimated Reorder Cost: $${estimatedReorderCost.toFixed(2)}`);

let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;
console.log(`Reorder Now?: ${reorderNow}`);