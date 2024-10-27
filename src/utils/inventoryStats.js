export function calculateInventoryStats(inventoryList, isAdmin) {
  let totalProducts = 0;
  let totalStoreValue = 0;
  let outOfStockCount = 0;
  const uniqueCategories = new Set();

  inventoryList.forEach(({ quantity, value, category, isDisabled }) => {
    if ((isAdmin && !isDisabled) || !isAdmin) {
      totalProducts += Number(quantity);
      
      const numericValue = Number(value.replace('$', ''));
      totalStoreValue += numericValue;

      if (quantity === 0) {
        outOfStockCount++;
      }

      uniqueCategories.add(category);
    }
  });

  return [
    { title: 'Total Products', count: totalProducts, id: 1 },
    { title: 'Total Store Value', count: totalStoreValue, id: 2 },
    { title: 'Out of Stock', count: outOfStockCount, id: 3 },
    { title: 'Number of Categories', count: uniqueCategories.size, id: 4 },
  ];
}