import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SignUp from "./routes/SignUP";
import Login from "./components/LogIn";
import NewRequest from "./routes/NewRequest";
import { Context, ContextProvider } from "./components/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RequestList from "./routes/RequestList";

class App extends Component {
  state = {
    message: "",
    authenticated: false,
    token: "",
  };

  render() {
    return (
      <ContextProvider>
        <Context.Consumer>
          {({ authenticated, token }) => (
            <Router>
              <div>
                <link
                  async
                  rel="stylesheet"
                  href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
                />

                <Header />
                {!authenticated ? (
                  <>
                    <Route exact path="/" component={Login} />
                    <Route path="/signUp" component={SignUp} />
                  </>
                ) : (
                  <>
                    <Route path="/newRequest" component={NewRequest} />
                    <Route path="/myRequests" component={RequestList} />
                  </>
                )}
              </div>
            </Router>
          )}
        </Context.Consumer>
      </ContextProvider>
    );
  }
}

export default App;
