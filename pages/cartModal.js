import React,{useState} from 'react';
import '../style/proudctCard.css';
import { connect } from 'react-redux';
import {Form} from 'react-redux-form';

const CartModal = (props) =>{
  
    return(
      <Form>
      </Form>
        
    )
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        //addProductData : (ProductData) => dispatch(addProductData(ProductData))
    }
   
}

const mapStateToProps = (state,ownProps) =>{
    return{
   // ProductDataProp : state.productList.productData
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)
