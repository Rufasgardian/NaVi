import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SignUP from './routes/SignUP'
import Login from './components/LogIn';
import NewRequest from './routes/NewRequest'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component{

  state = {
    message: ''
  };


  render(){
    return(
      <Router>
        <div>
          <link
            async
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />

          <Header />

          <Route exact path="/" component={Login} />
          <Route path="/signUp" component={SignUP} />
          <Route path="/newRequest" component={NewRequest} />

        </div>
      </Router>
    )
  }





}


export default App;
