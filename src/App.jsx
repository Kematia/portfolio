import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './components/Home.jsx';
import Error from './components/Error.jsx';
import Navigation from './components/Navigation.jsx';
import Portfolio from './components/Portfolio.jsx';
import SinglePortfolioItem from './components/SinglePortfolioItem.jsx';

class App extends Component {
    
    render() {
        return (
            <>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/portfolio" exact component={Portfolio}/>
                    <Route path="/portfolio/:name" component={SinglePortfolioItem}/>
                    <Route component={Error}/>
                    
                </Switch>

            </>
        )
    }
}

export default App;
