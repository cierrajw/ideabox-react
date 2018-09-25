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
      cardAdded: false,
      cardShowing: false
    }

  }

  addCard = (card) => {

    const newCard = {...card, id: Date.now()};

    this.setState({
      cardList: [newCard, ...this.state.cardList]
    })

    let stringifiedIdea = this.setLocalStorage(newCard);

    let retrievedIdea = JSON.parse(localStorage.getItem(stringifiedIdea));

  }

  deleteCard(id){

    let cards = this.state.cardList;

    let updatedCards = cards.filter(card=>{
      card.id !== id;
    })
    this.setState({
      cardList: updatedCards
    })

    console.log("HERE IS THE ID:" + id)

  }

  setLocalStorage(newCard){

    let stringifiedIdea = localStorage.setItem(newCard.id, JSON.stringify(newCard));

    return stringifiedIdea;

  }

  // getLocalStorage(stringifiedIdea){
  //   for(var i = 0; localStorage.length; i++){
  //     let parsedIdea = JSON.parse(localStorage.getItem(stringifiedIdea))
  //
  //   }
  // }
  //
  // componentDidMount(){
  //
  //
  // }

  render() {


    return (
      <div className="App">

        <AddCard addCard={this.addCard} cardList={this.state.cardList} deleteCard={this.deleteCard} cardAdded={this.state.cardAdded}/>
        <Search />
        <CardContainer cards={this.state.cardList} deleteCard={(id) => this.deleteCard(id)}/>

      </div>
    );
  }
}

export default App;
