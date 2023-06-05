import React, { Component } from 'react';

import './SearchForm.css';
import Header from './headerView/Header';
import Search from './searchView/Search';
import FlightResult from './resultView/FlightsResult';

class SearchForm extends Component {

  constructor(props){
    super(props);
    this.state={
      data:""
    }
  }

  formChildSearch(params) {
  this.setState({
    data : params
  })
}
  render() {
    return (
      <div className="app">
        <Header/>
        <section className="app__content">
        <Search callback={this.formChildSearch.bind(this)}/>
        <FlightResult data={this.state.data}/>
        </section>
      </div>
    );
  }
}

export default SearchForm;
