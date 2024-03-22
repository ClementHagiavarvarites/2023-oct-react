import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ParkingLotForm from './Components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';

function App() {

  const [parkingLotItems, setParkingLotItems] = useState([]);

  function addItem(date, link, description, priority) {
    setParkingLotItems(oldItems => [
      ...oldItems,
      {
        id: nanoid(),
        date,
        link,
        description,
        priority
      }
    ]);
  }

  function deleteItem(id) {
    setParkingLotItems(oldItems => oldItems.filter(item => item.id !== id));
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Browser Parking Lot</h1>
        <p>Send most of your browser tabs into retirement.</p>
      </header>
      <main>
        <ParkingLotForm addItem={addItem}/>
        <ParkingLotList
          parkingLotItems={parkingLotItems}
          deleteItem={deleteItem} />
      </main>
    </div>
  );
}

export default App;
