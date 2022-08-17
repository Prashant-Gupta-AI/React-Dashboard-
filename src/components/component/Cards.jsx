import React from 'react';
import '../styles/cards.css'
import Card from './Card';

function Cards() {
  return (
    <>
    <div className="cardBox">
        <Card number="5753" cardName="Daily Views" icon="eye"/>
        <Card number="1,896" cardName="Sales" icon="trending-up"/>
        <Card number="396" cardName="Reviews" icon="thumbs-up"/>
        <Card number="$10,785" cardName="Earnings" icon="cash"/>
    </div>
    </>
  )
}

export default Cards