import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './app.scss';
import Header from './header';
import Home from './home';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Under from './under';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
        <Under />
      </BrowserRouter>
      </>
    );
  }
}

export default App;
