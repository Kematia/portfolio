import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import portfolioData from '../data/portfolio_data.json';

class SingelPortfolioItem extends Component {

    state = {
        activeItem: []
    }

    componentDidMount = () => {
        // get item name from window url
        const itemName = window.location.pathname.split("/").pop();
        
        // searches for matching object id for the active item in the json data
        const itemID = portfolioData.findIndex(obj => obj.name === itemName)

        // get whole obj data from item id
        // then push to state
        const activeItem = portfolioData[itemID]
        this.setState({ activeItem })

    }

    render() {
        const item = this.state.activeItem
        console.log(item);
        
        return (
            <>
                 <h1>single portfolio {item.name}</h1>
                <Link to="/">Go Back</Link>
            </>
        )
    }
}

export default SingelPortfolioItem;