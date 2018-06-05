import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './pages/Home';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}

export default App;
