import React from 'react';

const SearchBar = () => {
    return (
    <div class='search'>
    <form>
    <input type="text" placeholder="Search.." name="search"/>
    <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    </div>
    );
}

export default SearchBar;
 
 
