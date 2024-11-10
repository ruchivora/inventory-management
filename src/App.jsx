import './App.css'
import CardList from './components/CardList/CardList';
import Table from './components/Table/Table.jsx';
import { useContext } from 'react';
import { DataContext } from './store/context.jsx';
import { VIEW_TYPE } from './constants.js';

function App() {

  let {isAdmin, updateViewType} = useContext(DataContext);

  function handleOnClick(event) {
    const buttonText = event.target.innerText;
    const viewType = (buttonText === VIEW_TYPE.ADMIN) ? VIEW_TYPE.ADMIN : VIEW_TYPE.USER;
    updateViewType(viewType)
  }

  return (
    <>
      <div className="viewToggle">
        <button 
          className={`viewToggleBtn ${isAdmin ? 'active' : ''}`} 
          onClick={handleOnClick}>Admin</button>
        <button
          className={`viewToggleBtn ${!isAdmin ? 'active' : ''}`}
          onClick={handleOnClick}>User</button>
      </div>
      
      <h2>Inventory stats</h2>
      <CardList></CardList>
      <Table></Table>
    </>
  );
}

export default App
