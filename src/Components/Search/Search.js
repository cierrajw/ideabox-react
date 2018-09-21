import React, { Component } from 'react';
import './search.css'

export default class Search extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <input className="search-input" placeholder="Search ideas"/>
    )
  }
}
