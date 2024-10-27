import { SET_INVENTORY, DELETE_ITEM, UPDATE_ITEM, TOGGLE_DISABLED_STATUS, SET_VIEW_TYPE } from './actionTypes';

export const initialState = {
  inventoryList: [],
  isAdmin: true,
};

export function inventoryReducer(state, action) {

  switch (action.type) {

  case SET_INVENTORY: {
    return { ...state, inventoryList: [...action.payload] };
  }
    

  case DELETE_ITEM: {
    const updatedList = state.inventoryList.filter(item => item.id !== action.payload);
    
    return {
      ...state,
      inventoryList: updatedList,
    };
  }
    

  case UPDATE_ITEM: {
    const updatedList = state.inventoryList.map(item =>
      (item.id === action.payload.id) ? { ...item, ...action.payload } : item
    );

    return {
      ...state,
      inventoryList: updatedList
    };
  }
    

  case TOGGLE_DISABLED_STATUS: {
    const updateList = state.inventoryList.map(item => 
      item.id === action.payload ? { ...item, isDisabled: !item.isDisabled } : item
    )

    return {
      ...state,
      inventoryList: updateList
    };
  }
    

  case SET_VIEW_TYPE: {
    const isAdminView = (action.payload === 'Admin');
    const updateList = state.inventoryList.map(item => ({
      ...item,
      isDisabled: !isAdminView,
    }))

    return {
      ...state,
      isAdmin: isAdminView,
      inventoryList: updateList
    };
  }
    
  default:
    throw new Error(`Unhandled action type: ${action.type}`);
  }
}
