import React, { Component } from 'react';
import logo from './logo.svg';
import AddCard from './Components/AddCard/AddCard';
import Search from './Components/Search/Search';
import CardContainer from './Components/CardContainer/CardContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      cardList: []
    }

  }

  addCard = (card) => {

    const newCard = {...card, id: Date.now()}

    this.setState({
      cardList: [...this.state.cardList, newCard]
    })
  }

  render() {


    return (
      <div className="App">

        <AddCard addCard={this.addCard}/>
        <Search />
        <CardContainer cardList={this.state.cardList}/>

      </div>
    );
  }
}

export default App;
