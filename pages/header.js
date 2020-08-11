import React from 'react';
import SearchBar from './searchBar.js';
import Cart from './cart.js';


const Header = () => {

    return (
    <div class='header'>
    <h1 class='title'>Ethanic</h1>
    <div class='search'>
    <SearchBar/>
    <Cart/>
    </div>
    </div>
    );
}

export default Header;