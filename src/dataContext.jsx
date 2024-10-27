import { createContext, useState, useEffect } from 'react';
/** Mocked Data */
// import { inventoryData } from './inventoryData';
import PropTypes from 'prop-types';


const LOCALSTORAGE_KEY = 'inventoryData';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  let [inventoryList, setInventoryList] = useState([]);
  let [isAdmin, setIsAdmin] = useState(true);

  async function getInvetoryData() {

    try {
      const cachedData = localStorage.getItem(LOCALSTORAGE_KEY);

      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        updateInventoryList(parsedData);
        return; 
      }

      /* Fetch inventory data if not cached */
      const response = await fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
      const jsonData = await response.json();

      /* Adding 2 keys just to perform action on frontend */
      const updatedInventoryList = jsonData.map((item, index) => ({
        ...item,
        id: index + 1, 
        isDisabled: false, 
      }));

      updateInventoryList(updatedInventoryList);

    } catch (error) {
      console.error('Error Fetching Data:', error)
    }

  }

  function updateInventoryList(inventoryList) {
    setInventoryList(() => [...inventoryList]);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inventoryList))
  }


  function deleteInventoryItem(id) {
    const newList = inventoryList.filter((item) => (item.id !== id));
    updateInventoryList(newList);
  };


  function updateInventoryItem(updatedItem) {
    const newList = inventoryList.map(item => 
      item.id === updatedItem.id ? { ...item, ...updatedItem } : item
    );

    updateInventoryList(newList);
  }

  function toggleIsDisabledStatus(id) {
    const newList = inventoryList.map(item => (item.id === id ? { ...item, isDisabled: !item.isDisabled } : item));
    updateInventoryList(newList);
  };


  function updateViewType(viewType) {
    const isAdminView = (viewType === 'Admin');
    setIsAdmin(isAdminView);

    const newList = inventoryList.map(item => ({...item, isDisabled: !isAdminView,}));
    updateInventoryList(newList);
  }

  useEffect(()=> {
    getInvetoryData();
  },[])

  return (
    <DataContext.Provider value={{inventoryList, deleteInventoryItem, toggleIsDisabledStatus, updateInventoryItem, updateViewType, isAdmin}}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired
};

