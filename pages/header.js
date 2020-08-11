import React from 'react';
import SearchBar from './searchBar.js'

const Header = () => {
    return (
    <div class='header'>
    <h1 class='title'>Ethanic</h1>
    <div class='search'>
    <SearchBar/>
    <button>Cart <span>2</span></button>
    </div>
    </div>
    );
}

export default Header;