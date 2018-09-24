import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import AddCard from './AddCard';
// import App from './src/App.js';

describe('AddCard', ()=>{

  let wrapper;
  let addCard = new AddCard();

  let props = {
    cardList: []
  }

  beforeEach(()=>{
    wrapper = mount(<AddCard cardList={props.cardList} />)
  });

  // it('Component should exist', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('CardList should start as empty object', () => {

    // expect(wrapper.props.cardList).length.toBe(0);

    expect(wrapper.state('cardList').to.equal(0));


  });

  it('Should add a new card to the cardList', () => {

    wrapper.props.cardList.length = 0;

    wrapper.instance().addCard();

    // wrapper.props.addCard();

    wrapper.props.cardList.length = 1;


  });


})
