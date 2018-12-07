import React, { Component } from 'react';
import data from '../data/portfolio_data.json';
import { Link } from 'react-router-dom'

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Portfolio</h2>
        <h3>Featured</h3>
        <ul id="featured_portfolio">
        {data.map(item => {
          if (item.featured === true) {
            return <Link to="/portfolio/"><li key={item.id}> {item.name}, {item.id}, {JSON.stringify(item.featured)}</li></Link>
          } else {

          }
        })}
        </ul>
        <h3>All my works</h3>
        <ul id="full_portfolio">
          {data.map(item => {
            return <li key={item.id}> {item.name}, {item.id}, {JSON.stringify(item.featured)}</li>
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Portfolio;
