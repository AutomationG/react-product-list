import React from 'react';
import '../style/ProductCard.css';

const ProductCard = (props) =>{
    return(
        <div className="productCard">
            <div className='image'><img src={props.src} /></div>
            <h4>{props.brand}</h4>
            <h4>{props.product}</h4>
            <span>{props.price}</span>
            <button className='buttoCart'>Add to Cart</button>
        </div>
    )
}

export default ProductCard;