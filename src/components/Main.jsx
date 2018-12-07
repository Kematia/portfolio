import React, { Component } from 'react';
import Portfolio from './Portfolio.jsx';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <h5>Here's my Main content - RIFARE TUTTO CON ROUTES</h5>
          <Portfolio />
        </main>
      </React.Fragment>
    );
  }
}

export default Main;
