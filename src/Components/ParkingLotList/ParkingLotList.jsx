import React from 'react';
import ParkingLotItem from './ParkingLotItem';
import './ParkingLotList.css';

export default function ParkingLotList({ parkingLotItems, deleteItem }) {

  const ListItems = parkingLotItems.map(item =>
    <ParkingLotItem key={item.id} deleteItem={deleteItem} { ...item } />
  )

  return (
    <section className="parking-lot-list-container">{ ListItems }</section>
  );
}
