import React, { Component } from 'react';
import './card.css'

export default class Card extends Component{
  constructor(){
    super();

    this.state = {
      title: '',
      description: '',
      key: Date.now()
    }
  }

render(){
  return(
    <article className="card-article">
    <h1>{this.props.title}</h1>
    <h1>{this.props.description}</h1>
    </article>
  )
}


}
