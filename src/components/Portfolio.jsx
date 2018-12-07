import React, { Component } from 'react';

import FeaturedPortfolioItem from './FeaturedPortfolioItem'
import PortfolioItem from './PortfolioItem'
import portfolioData from '../data/portfolio_data.json';


class Portfolio extends Component {

    state = {
        portfolio_items: portfolioData
    }

    loadPortfolio = () => {
        console.log(this.state.portfolio_items)
    }

    render() {
        return (
            <>
                <h3 onLoad={this.loadPortfolio()}>Here be portfoliossds</h3>    

                <h5>Featured Portfolio</h5>
                <FeaturedPortfolioItem portfolio_item={this.state.portfolio_items}/>       
                <hr/>
                <h5>Full Portfolio</h5>
                <PortfolioItem portfolio_item={this.state.portfolio_items}/>      
                <hr/>
            </>
        )
    }
}

export default Portfolio;