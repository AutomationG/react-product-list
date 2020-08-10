const productList = (state = {},action) =>{
switch(action.type){
    case 'ADD_DATA' : return Object.assign({},state, {productData : action.data})
}
}