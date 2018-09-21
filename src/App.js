import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Components/Cards/Card';
import AddCard from './Components/AddCard/AddCard';
import Search from './Components/Search/Search';
import './App.css';
import './index.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      cardAdded: false,
      cardList: []
    }

    // this.addCard = this.addCard.bind(this);
  }
  //
  // addCard(card){
  //   let addCard = this.props.cardList.slice();
  //
  //   addCard.push(card);
  // }

  render() {


    return (
      <div className="App">

        <AddCard title={this.state.cardTitle} description={this.state.description} cardList={this.state.cardList}/>
        <Search />


      </div>
    );
  }
}

export default App;
