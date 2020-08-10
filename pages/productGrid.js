import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import ProductCard from './productCard.js';
import ProductData from './utils/productData.js';
import './style/proudctCard.css';
import {addProductData} from './actions/productDataAction.js';


const ProductList = (props) => {
    useEffect(()=>{
        props.addProductData(props.ProductData)
    },[])

    return(
        <ul className='list'>
        {props.ProductData.map((data) =>{
            return(
            <li className='productList'>
                <ProductCard src={data.src} brand={data.brand} 
                product={data.product} price={data.price}/>
            </li>
            )
        })
        }
        </ul>
    )
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        addProductData : (ProductData) => dispatch(addProductData(ProductData))
    }
   
}

const mapStateToProps = (state,ownProps) =>{
    return{
    ProductData : state.ProductData
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)