import React,{useState} from 'react';
import '../style/proudctCard.css';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../actions/productDataAction.js';

const ProductCard = (props) =>{
  const dispatch = useDispatch()
  const cartCount = useSelector(state => state.cartCount.count)
  const updateCart = () => {
  dispatch(addToCart(cartCount+1))
  }

    return(
        <div className="productCard">
            <div className='image'><img src={props.src} /></div>
            <h4>{props.brand}</h4>
            <h4>{props.product}</h4>
            <span>{props.price}</span>
            <button onClick= {updateCart} className='buttoCart'>Add to Cart</button>
        </div>
    )
}

export default ProductCard;