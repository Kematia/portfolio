import React from 'react';

const Search = props => (
    <form onSubmit={props.getPortfolio}>
        <input type="text" name="searchValue"/>
        <button>Search</button>
    </form>
);

export default Search;