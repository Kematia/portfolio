import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import Search from './Search.jsx';

class Navigation extends Component {

    render() {
        return (
            <>
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/portfolio"><li>Portfolio</li></NavLink>
                    <NavLink to="/asdasd"><li>Error</li></NavLink>
                </ul>
                <Search />

                <hr/>
            </>
        )
    }
}

export default Navigation;
