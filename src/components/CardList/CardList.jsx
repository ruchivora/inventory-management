import { useInventoryData } from "../../customHooks";
import Card from "../Card/Card";
import styles from './CardList.module.css';
import { DataContext } from '../../dataContext';
import { useContext, useMemo } from "react";
import { calculateInventoryStats } from '../../utils/inventoryStats.js';


export default function CardList() {
  let {inventoryList} = useInventoryData();
  let {isAdmin} = useContext(DataContext);
  let inventoryStats = [];

  // This code can be moved to utils

  // function calculateStats() {
  //   let totalProduct = 0;
  //   let totalStoreValue = 0;
  //   let outOfStock = 0;
  //   const categories = new Set();

  //   inventoryList.forEach(({ quantity, value, category, isDisabled }) => {
  //     if((isAdmin && !isDisabled) || !isAdmin) {
  //       totalProduct += Number(quantity);
  
  //       // Remove the $ sign and convert value to number
  //       const numericValue = Number(value.replace('$', ''));
  //       totalStoreValue += numericValue;
      
  //       if (quantity === 0) {
  //         outOfStock++;
  //       }
  //       categories.add(category);
  //     }
      
  //   });

  //   return [
  //     { title: 'Total Product', count: totalProduct, id: 1 },
  //     { title: 'Total Store Value', count: totalStoreValue, id: 2 },
  //     { title: 'Out of Stock', count: outOfStock, id: 3 },
  //     { title: 'Number of Categories', count: categories.size, id: 4 },
  //   ];

  // }

  // Here useMemo hook can be used ?

  inventoryStats = useMemo(
    () => calculateInventoryStats(inventoryList, isAdmin),
    [inventoryList, isAdmin]
  );

  // inventoryStats = calculateStats();
  
  return (
    <>
      <div className={styles.cardList}> 
        {inventoryStats.map((stats, index) => (
          <Card
            key={index}
            {...stats}></Card>
        ))}
      </div>
      
    </>
    
  )
}
