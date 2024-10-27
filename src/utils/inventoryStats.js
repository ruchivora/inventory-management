export function calculateInventoryStats(inventoryList, isAdmin) {
  let totalProducts = 0;
  let totalStoreValue = 0;
  let outOfStockCount = 0;
  const uniqueCategories = new Set();

  inventoryList?.forEach(({ quantity, value, category, isDisabled }) => {
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
    { title: 'Total Products', count: totalProducts, icon: 'FaShoppingCart', id: 1 },
    { title: 'Total Store Value', count: totalStoreValue, icon: 'RiExchangeDollarFill', id: 2 },
    { title: 'Out of Stock', count: outOfStockCount, icon: 'MdRemoveShoppingCart', id: 3 },
    { title: 'Number of Categories', count: uniqueCategories.size, icon: 'TbTriangleSquareCircleFilled', id: 4 },
  ];
}