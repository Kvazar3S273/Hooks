import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import UseStateExample from "./components/useStateExample"
import UseEffectExample from "./components/useEffectExample"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Switch>
                <Route exact path="/useStateExample">
                  <UseStateExample />
                </Route>
                <Route exact path="/useEffectExample">
                  <UseEffectExample />
                </Route>
              </Switch>

            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
