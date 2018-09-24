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
      cardList: [],
      id: Date.now()
    }

  }

  setLocalStorage(idea){

    localStorage.setItem(this.state.id, JSON.stringify(idea));
  }

  addCard = (card) => {

    const newCard = {...card}

    this.setState({
      cardList: [newCard, ...this.state.cardList]
    })

    this.setState({
      id: Date.now()
    })

    this.setLocalStorage(newCard);
  }


  //
  // getLocalStorage(){
  //
  // }
  //
  // componentDidMount(){
  //
  //   getLocalStorage();
  //
  //
  // }

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
