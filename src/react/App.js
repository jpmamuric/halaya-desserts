import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './pages/Home';
import Demo1 from './pages/Demo-1';
import Demo2 from './pages/Demo-2';
import Layout from './components/layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path='/demo1' component={Demo1}/>
          <Route path='/demo2' component={Demo2}/>
        </Layout>
      </div>
    );
  }
}

export default App;
