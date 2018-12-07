import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = props => (
    props.portfolio_item.map((portfolio_item) => {
        return (
            <Link to={{ 
                pathname: `/portfolio/${portfolio_item.name}`,
                state: {portfolio_item}
                }} key={portfolio_item.id}>
                <p >{portfolio_item.name}</p>
            </Link>
        )
    })  
)

export default PortfolioItem