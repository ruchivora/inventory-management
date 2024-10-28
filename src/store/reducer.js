import { SET_INVENTORY, DELETE_ITEM, UPDATE_ITEM, TOGGLE_DISABLED_STATUS, SET_VIEW_TYPE } from './actionTypes';
const LOCALSTORAGE_KEY = 'inventoryData';

export const initialState = {
  inventoryList: [],
  isAdmin: true,
};

export function inventoryReducer(state, action) {

  switch (action.type) {

  case SET_INVENTORY: {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(action.payload));
    return { ...state, inventoryList: [...action.payload] };
  }
    

  case DELETE_ITEM: {
    const updatedList = state.inventoryList.filter(item => item.id !== action.payload);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedList));
    return {
      ...state,
      inventoryList: [...updatedList],
    };
  }
    

  case UPDATE_ITEM: {
    const updatedList = state.inventoryList.map(item =>
      (item.id === action.payload.id) ? { ...item, ...action.payload } : item
    );

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedList));
    return {
      ...state,
      inventoryList: [...updatedList]
    };
  }
    

  case TOGGLE_DISABLED_STATUS: {
    const updatedList = state.inventoryList.map(item => 
      item.id === action.payload ? { ...item, isDisabled: !item.isDisabled } : item
    )

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedList));
    return {
      ...state,
      inventoryList: [...updatedList]
    };
  }
    

  case SET_VIEW_TYPE: {
    const isAdminView = (action.payload === 'Admin');
    const updatedList = state.inventoryList.map(item => ({
      ...item,
      isDisabled: !isAdminView,
    }))
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedList));
    
    return {
      ...state,
      isAdmin: isAdminView,
      inventoryList: [...updatedList]
    };
  }
    
  default:
    throw new Error(`Unhandled action type: ${action.type}`);
  }
}
