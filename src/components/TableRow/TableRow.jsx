import PropTypes from 'prop-types';
import { DataContext } from '../../dataContext';
import { useContext, useState } from 'react';
import classNames from 'classnames';
import styles from './TableRow.module.css'; 
import EditRow from '../EditRow/EditRow';


export default function TableRow(inventoryItem) {
  let {name, category, isDisabled, value, quantity, price, id} = inventoryItem;
  let {isAdmin} = useContext(DataContext);
  let [isEditMode, setIsEditMode] = useState(false);
  let [itemToEdit, setItemToEdit] = useState(null);
  const {deleteInventoryItem, toggleIsDisabledStatus} = useContext(DataContext);

  const activeState = classNames({
    [styles.disabled]: (!isAdmin || (isAdmin && isDisabled)),  
  });

  function handleEditClick(inventoryItem) {
    setIsEditMode(true);
    setItemToEdit(inventoryItem);
  }

  function closeEditModal() {
    setIsEditMode(false)
  }

  return (
    <>
      <div className={`${styles.tableRow}`}>
        <div className={`${styles.tableRowCell} ${activeState}`}>{name}</div>
        <div className={`${styles.tableRowCell} ${activeState}`}>{category}</div>
        <div className={`${styles.tableRowCell} ${activeState}`}>{price}</div>
        <div className={`${styles.tableRowCell} ${activeState}`}>{quantity}</div>
        <div className={`${styles.tableRowCell} ${activeState}`}>{value}</div>
        
        <div className={`${styles.rowActions} ${styles.tableRowCell}`}>
          <button
            disabled={!isAdmin || isDisabled}
            className={styles.editButton}
            onClick={() => handleEditClick(inventoryItem)}>Edit</button>
          <button
            disabled={!isAdmin}
            className={styles.disableButton}
            onClick={() => {toggleIsDisabledStatus(id)}}>Disable</button>
          <button
            disabled={!isAdmin}
            className={styles.deleteButton}
            onClick={() => {deleteInventoryItem(id)}}>Delete</button>
        </div>
      </div>
      
      {isEditMode && (<EditRow
        item={itemToEdit}
        closeEditModal={closeEditModal}></EditRow>)}
    </>
    
  )
}

TableRow.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};