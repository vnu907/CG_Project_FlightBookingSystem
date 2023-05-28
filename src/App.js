

import Start from './components/Start.js';
import Card from './components/Card';
import Upi from './components/Upi'
import Success from './components/Success'
import { BrowserRouter as Router,Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  render(){

  
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' exact Component={Start}/>
      <Route path='/Card' exact Component={Card}/>
      <Route path='/Upi' exact Component={Upi}/>
      <Route path='/Success' exact Component={Success} />
    </Routes>
    </div>
   
    </Router>
  ); }
}

export default App;
