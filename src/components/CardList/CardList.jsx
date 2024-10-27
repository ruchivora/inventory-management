import Card from "../Card/Card";
import styles from './CardList.module.css';
import { useMemo, useContext } from "react";
import { calculateInventoryStats } from '../../utils/inventoryStats.js';
import { DataContext } from "../../store/context.jsx";

export default function CardList() {
  const {isAdmin, inventoryList} = useContext(DataContext);
  let inventoryStats = [];

  inventoryStats = useMemo(
    () => calculateInventoryStats(inventoryList, isAdmin),
    [inventoryList, isAdmin]
  );
  
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
