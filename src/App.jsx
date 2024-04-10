import './App.css';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ParkingLotForm from './Components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';
import Timer from './Components/Timer/Timer';
import useLocalStorage from 'use-local-storage';

function getInitialState() {
  let savedState = localStorage.getItem('items');
  if (typeof savedState === 'string') {
    return JSON.parse(savedState);
  }
  return [];
}

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const [parkingLotItems, setParkingLotItems] = useState(getInitialState());

  function saveParkingLotItems() {
    localStorage.setItem('items', JSON.stringify(parkingLotItems));
  }

  useEffect(saveParkingLotItems, [ parkingLotItems ]);

  function addItem(date, link, description, priority) {
    setParkingLotItems((oldItems) => [
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
    setParkingLotItems(
      (oldItems) => oldItems.filter(item => item.id !== id)
    );
  }

  return (
    <div className="App" data-theme={theme}>
      <header className="App-header">
        <h1>Browser Parking Lot</h1>
        <p>Send most of your browser tabs into retirement.</p>
        <Timer />
      </header>
      <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <main>
        <ParkingLotForm addItem={addItem} theme={theme}/>
        <ParkingLotList
          parkingLotItems={parkingLotItems}
          deleteItem={deleteItem}
          theme={theme} />
      </main>
    </div>
  );
}

export default App;
