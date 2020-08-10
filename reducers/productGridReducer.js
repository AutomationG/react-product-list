let initialState = {
  productData: []
};
export const productList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      console.log('reducer')
      var a =  Object.assign({}, state, {productData: 
        state.productData.concat(action.payload) });
        console.log(a)
        return a;
    default: return state;
  }
};
