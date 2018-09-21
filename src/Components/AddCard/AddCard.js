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
        <div className="card-entry-div">
        <h1 className="header-title">Idea Box</h1>
          <div className="idea-title"><h3>Title</h3><input type="text"
          onChange={(event)=>{
            this.setState({
              title: event.target.value
            })
          }}/>
            </div>
          <div>

          <h3>Description</h3><textarea type="text" className="idea-description"

          onChange={(event)=>{
            this.setState({
              description: event.target.value
            })
          }}/>
          </div>
        </div>

        <button className="card-button" onClick={(event)=>{
          console.log('clickedd')
          this.setState({
            cardAdded: true,
          })

        }}>Add card</button>

        {this.state.cardAdded && <Card />}

        <Card title={this.state.title} description={this.state.description}/>
      </section>
    )
  }

}
