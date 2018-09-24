import React from 'react';
import Card from '../Cards/Card';

const CardContainer = (props) => {

  const Cards = props.cardList.map(card => <Card {...card} deleteCard={props.deleteCard}/>)

  return(
    <div className="CardContainer">
      { Cards }
    </div>
  )
}

export default CardContainer;
