import React, {Component} from 'react';
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css"

//Importacion de las ventanas
import Inicio from './Ventanas/Inicio';

class App extends Component {
  render(){

    return (
      <div className="App">
        <Router>
          <img src = {logo} className= "App-Logo" alt = "logo"/>
          <Switch>
            <Route exact path = "/" component = {Inicio}></Route>
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
