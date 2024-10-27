import { useContext } from 'react';
import { DataContext } from './dataContext';

export const useInventoryData = () => {
  return useContext(DataContext)
};

