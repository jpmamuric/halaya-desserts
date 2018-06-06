import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ children }) => (
  <div>
    <Link to='/demo1'> Demo 1 </Link>
    <Link to='/demo2'> Demo 2 </Link>
    { children }
  </div>
);

export default Home;
