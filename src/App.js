import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './components/Search';
import Cardlist from './components/Cardlist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from '../node_modules/react-bootstrap/Jumbotron';
import Button from '../node_modules/react-bootstrap/Button';
import {useState} from 'react';
function App() {
const [user,seter]=useState([]);

  return <div className="container">
    <Jumbotron className='body' >
      
      <h1>Github Card using <img className='ract'  src={logo}/></h1>
      <p>
        Plese enter the Username</p>
        <Search set={(data)=>seter([...user,data])} />
        <Cardlist val={user} />
     
    </Jumbotron>

  </div>
}

export default App;
