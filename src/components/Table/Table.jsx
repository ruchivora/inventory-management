import { useContext } from "react";
import TableRow from "../TableRow/TableRow";
import styles from "./Table.module.css";
import { DataContext } from "../../store/context.jsx";

const tableHeader = ["Name", "Category", "Price", "Quantity", "Value", "Action"]

export default function Table() {

  const {inventoryList} = useContext(DataContext);

  if (!inventoryList || inventoryList.length === 0) {
    return <div className={styles.loadingState}>Loading...</div>;
  }

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

        {inventoryList?.map((inventoryItem, index) => {
          return <TableRow
            {...inventoryItem}
            key={index} 
          />
        })}
      </div>
    </>
  )
}
