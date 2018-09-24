import React, { Component } from 'react';
import './card.css'

export default class Card extends Component{
  constructor(){
    super();

    this.state = {
      title: '',
      description: '',
    }
  }

render(){
  return(
    <article className="card-article">
    <section className="info-section">
    <h1 className="title-text">Idea:</h1><h2 className="title-value">{this.props.title}</h2>
    <h1 className="description-text">Description:</h1><h2 className="description-value">{this.props.description}</h2>
    </section>
    </article>
  )
}


}
