const initialState = {
  productData: []
};

const cartState ={
  count:0
}


export const productList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {...state, productData:action.payload}
      // return Object.assign({}, state, {productData: 
      //   state.productData.concat(action.payload) });
    
    default: return state;
  }
};

export const cartCount = (state=cartState,action) => {
  switch(action.type){
    case 'ADD_TO_CART': return {...state, count:action.payload}
    default:return state;
  }
}
