import './App.css'
import CardList from './components/CardList/CardList';
import Table from './components/Table/Table.jsx';
import { useContext } from 'react';
import { DataContext } from './store/context.jsx';

function App() {

  let {isAdmin, updateViewType} = useContext(DataContext);

  return (
    <>
      <div className="viewToggle">
        <button 
          className={`viewToggleBtn ${isAdmin ? 'active' : ''}`} 
          onClick={() => updateViewType('Admin')}>Admin</button>
        <button
          className={`viewToggleBtn ${!isAdmin ? 'active' : ''}`}
          onClick={() => updateViewType('User')}>User</button>
      </div>
      
      <h2>Inventory stats</h2>
      <CardList></CardList>
      <Table></Table>
    </>
  );
}

export default App
