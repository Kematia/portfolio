import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedPortfolioItem = props => (
    props.portfolio_item.map((portfolio_item) => {
        if (portfolio_item.featured === true) {
            return (
                <Link to={{ pathname: `/portfolio/${portfolio_item.id}` }} key={portfolio_item.id}>
                    <p >{portfolio_item.name}</p>
                </Link>
            )
        } else {
            return null
        }
    })  
)

export default FeaturedPortfolioItem