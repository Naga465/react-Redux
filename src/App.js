import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table'
import Editform from './components/Editform'
import { BrowserRouter as Router, Route } from 'react-router-dom'
                 

class App extends React.Component {
  render(){
  return (
  
    <div className="App">
      <header className="App-header">Products
      </header>
      <Table/>
    </div>
  
  );
}
}

export default App;
