import React from 'react';
import Card from '../Cards/Card';


  const getCards = (cards, deleteCard) => {
    return cards.map((card, index) => {
      return(<Card {...card} id={Date.now()} key={index} deleteCard={(id) => deleteCard(id)}/>)
    })
  }

  const CardContainer = ({cards, deleteCard}) => {
    return (
      <div>
      {getCards(cards, deleteCard)}
      </div>
    )
  }

export default CardContainer;
