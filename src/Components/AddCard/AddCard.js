import React, { Component } from 'react';
import './addcard.css';
import Card from '../Cards/Card';
import Search from '../Search/Search';


export default class AddCard extends Component{
  constructor(){
    super();

    this.state = {
      title: '',
      description: '',
      cardAdded: false,
      key: Date.now()
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
          <input className="title-input" value={this.state.title} placeholder="Title" type="text"
          onChange={(event)=>{
            this.setState({
              title: event.target.value
            })
          }}/>


         <textarea type="text" className="description-input" value={this.state.description} placeholder="Description"
          onChange={(event)=>{
            this.setState({
              description: event.target.value
            })
          }}/>
        </div>

        <button className="card-button" onClick={(event)=>{
          event.preventDefault();
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
