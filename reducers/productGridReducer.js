let initialState = {
  productData: []
};
export const productList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {...state,productData:action.payload}
      // return Object.assign({}, state, {productData: 
      //   state.productData.concat(action.payload) });
    
    default: return state;
  }
};
