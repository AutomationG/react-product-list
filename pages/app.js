import React from 'react';
import ProductList from './productGrid.js';
import Header from './header.js';

const App = () => {
    return (
      <React.Fragment>
      <Header/>
      <ProductList/>
      </React.Fragment>
    );
}

export default App;