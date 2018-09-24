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
      id: Date.now()
    }
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
          this.props.addCard(this.state)
        }}>Add card</button>

        {this.props.cardAdded ? <Card card={this.state} title={this.props.title} description={this.props.description} id={this.props.id} deleteCard={this.props.deleteCard}/> : null}


      </section>


    )
  }

}
