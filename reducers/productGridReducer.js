let initialState = {
  productData: []
};
export const productList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      console.log('reducer')
      return Object.assign({}, state, {productData: 
        action.data });
  }
};
