import React from 'react';
import Card from '../Cards/Card';


  const getCards = (cards, deleteCard) => {
    return cards.map((card, deleteCard) => {
      return(<Card {...card} deleteCard={(id) => this.deleteCard(id)}/>)
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
