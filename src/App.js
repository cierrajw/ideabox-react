import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Components/Cards/Card';
import AddCard from './Components/AddCard/AddCard';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      cardAdded: false,
      cardList: ['fuck', 'my', 'life'],
    }

    this.addCard = this.addCard.bind(this);
  }

  addCard(card){
    let addCard = this.props.cardList.slice();

    addCard.push(card);
  }

  render() {


    return (
      <div className="App">
        <AddCard title={this.state.cardTitle} description={this.state.description} cardList={this.state.cardList}/>

        <ul>
        {this.state.cardList.map(card=>{
          return <li key={card}>{card}</li>
          })
        }

        </ul>

      </div>
    );
  }
}

export default App;
