import React, { Component } from 'react';
import './addcard.css';
import Card from '../Cards/Card';

export default class AddCard extends Component{
  constructor(){
    super();

    this.state = {
      title: '',
      description: '',
      cardAdded: false
    }

    this.addCard = this.addCard.bind(this);

  }

  addCard(card){
    let addCard = this.props.cardList.slice();

    // this.props.cardList.push("oogahboogahhhhhh");
  }

  render(){
    return(
      <section className='add-card-info'>
      <h1 className="header-title">Idea Box</h1>
        <div className="card-entry-div">
          <h3 className="idea-title">Title</h3><input className="title-input" type="text"
          onChange={(event)=>{
            this.setState({
              title: event.target.value
            })
          }}/>


          <h3 className="idea-description">Description</h3><textarea type="text" className="description-input"
          onChange={(event)=>{
            this.setState({
              description: event.target.value
            })
          }}/>
        </div>

        <button className="card-button" onClick={(event)=>{
          console.log('clickedd')
          this.setState({
            cardAdded: true,
          })


        }}>Add card</button>

        {this.state.cardAdded ? <Card title={this.state.title} description={this.state.description}/> : null}


      </section>
    )
  }

}
