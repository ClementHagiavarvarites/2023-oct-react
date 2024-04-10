import React from 'react';
import ParkingLotItem from './ParkingLotItem';
import './ParkingLotList.css';

export default function ParkingLotList({ parkingLotItems, deleteItem, theme }) {

  const ListItems = parkingLotItems.map(item =>
    <ParkingLotItem key={item.id} deleteItem={deleteItem} { ...item } theme = {theme} />
  )

  return (
    <section theme={theme} data-bs-theme="dark" className="parking-lot-list-container">{ ListItems }</section>
  );
}
