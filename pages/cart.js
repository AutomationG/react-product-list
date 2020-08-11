import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CartModal from ''

const Cart = () => {

    const cartCount = useSelector(state => state.cartCount.count)
    const cartCountShow = cartCount > 0 ? <span>{cartCount}</span> : ''
    const showCartModel = () => {
      //return <CartModal/>
    }
    return (
    <button onClick ={showCartModel}>Cart {cartCountShow}</button>
    );
}

export default Cart;