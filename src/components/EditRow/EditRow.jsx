import { useContext, useState } from 'react';
import styles from './EditRow.module.css';
import { DataContext } from '../../dataContext';
import InputField from '../InputField/InputField';
import PropTypes from 'prop-types';

export default function EditRow({closeEditModal, item}) {

  let [inventoryItem, setInventoryItem] = useState(formatItemData(item));
  let {updateInventoryItem} = useContext(DataContext);

  function formatItemData(item) {
    return {
      ...item,
      value: Number(item.value.replace("$", "")),
      price: Number(item.price.replace("$", ""))
    };
  }

  function handleInputChange(event, key) {
    setInventoryItem(prevItem => ({
      ...prevItem,
      [key]: event.target.value, 
    }));
    
  }

  function handleOnSave(inventoryItem) {
    const formattedItem = {
      ...inventoryItem,
      value: `$${inventoryItem.value}`,
      price: `$${inventoryItem.price}`
    };
    updateInventoryItem(formattedItem);
    closeEditModal();
  }

  return (
    <>
      <div className={styles.editModal}>

        <div className={styles.editHeader}>
          <span className={styles.editHeaderText}>Edit product</span>
          <span className={styles.closeButton}>X</span>
        </div>

        <div className={styles.productName}>{inventoryItem.name}</div>
        <div>
          
          <InputField
            label="Category"
            value={inventoryItem.category}
            onChange={handleInputChange}
            keyName="category" />
          <InputField
            type="number"
            label="Price"
            value={inventoryItem.price}
            onChange={handleInputChange}
            keyName="price" />
          <InputField
            type="number"
            label="Quantity"
            value={inventoryItem.quantity}
            onChange={handleInputChange}
            keyName="quantity" />
          <InputField
            type="number"
            label="Value"
            value={inventoryItem.value}
            onChange={handleInputChange}
            keyName="value" />
          
        </div>

        <div className={styles.buttonGroup}>
          <button
            onClick={() => closeEditModal()}
            className={styles.cancelButton}>Cancel</button>
          <button
            onClick={()=> handleOnSave(inventoryItem)}
            className={styles.saveButton}>Save</button>
        </div>
      </div>
      
    </>
    
    
  )
}


EditRow.propTypes = {
  closeEditModal: PropTypes.func.isRequired,
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
