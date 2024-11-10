import { createContext, useReducer,useEffect } from 'react';
import PropTypes from 'prop-types';
import { inventoryReducer, initialState } from './reducer';
import { SET_INVENTORY, DELETE_ITEM, UPDATE_ITEM, TOGGLE_DISABLED_STATUS, SET_VIEW_TYPE } from './actionTypes';

const defaultValue = {
  inventoryList: [],
  isAdmin: false,
}

const LOCALSTORAGE_KEY = 'inventoryData';

export const DataContext = createContext(defaultValue);

export const DataProvider = ({ children }) => {

  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  async function fetchInventoryData() {

    try {
      const cachedData = localStorage.getItem(LOCALSTORAGE_KEY);

      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setInventory(parsedData);
        return;
      }

      const response = await fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
      const jsonData = await response.json();

      const updatedInventoryList = jsonData.map((item, index) => ({
        ...item,
        id: index + 1,
        isDisabled: false,
      }));

      setInventory(updatedInventoryList);
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedInventoryList));

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchInventoryData();
  }, []);


  const setInventory = (inventoryList) => {
    dispatch({ type: SET_INVENTORY, payload: inventoryList });
  };
  
  const deleteInventoryItem = (id) => {
    dispatch({ type: DELETE_ITEM, payload: id });
  };
  
  const updateInventoryItem = (updatedItem) => {
    dispatch({ type: UPDATE_ITEM, payload: updatedItem });
  };
  
  const toggleIsDisabledStatus = (id) => {
    dispatch({ type: TOGGLE_DISABLED_STATUS, payload: id });
  };
  
  const updateViewType = (viewType) => {
    console.log('viewType', viewType)
    dispatch({ type: SET_VIEW_TYPE, payload: viewType });
  };


  return (
    <DataContext.Provider 
      value={{
        inventoryList: state.inventoryList, 
        isAdmin: state.isAdmin,
        deleteInventoryItem,
        updateInventoryItem,
        toggleIsDisabledStatus,
        updateViewType,
        setInventory
      }}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};