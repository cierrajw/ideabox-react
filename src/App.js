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
    }

  }

  addCard = (card) => {

    const newCard = {...card, id: Date.now()}

    this.setState({
      cardList: [newCard, ...this.state.cardList]
    })

    let stringifiedIdea = this.setLocalStorage(newCard);

    // localStorage.getItem(stringifiedIdea)

  }

  setLocalStorage(idea){

    let stringifiedIdea = localStorage.setItem(idea.id, JSON.stringify(idea));

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

        <AddCard addCard={this.addCard}/>
        <Search />
        <CardContainer cardList={this.state.cardList}/>

      </div>
    );
  }
}

export default App;
