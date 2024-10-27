import { useInventoryData } from "../../customHooks";
import TableRow from "../TableRow/TableRow";
import styles from "./Table.module.css";

const tableHeader = ["Name", "Category", "Price", "Quantity", "Value", "Action"]

export default function Table() {

  let {inventoryList} = useInventoryData();

  return (
    <>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          {tableHeader.map((header, index) => (
            <div
              key={index}
              className={styles.tableHeaderCell}>
              <span className={styles.tableHeaderText}>{header}</span>
            </div>
          ))}
        </div>

        {inventoryList.map((inventoryItem, index) => {
          return <TableRow
            key={index} 
          {...inventoryItem}></TableRow>
        })}
      </div>
      
      
    </>
    
    
  )
}
