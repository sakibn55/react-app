import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
