const Cartreducer = (state,action) => {

    //Add to cart
if(action.type === "ADD_TO_CART"){
    let {id,amount,product} = action.payload;
   console.log(id,amount,product);
    let existingProduct = state.cart.find(
      (curElem) => curElem.id === id
    );
    if(existingProduct){
      let updatedProduct = state.cart.map((curElem) =>{
        if(curElem.id === id){
          let newAmount = curElem.amount + amount;
          if(newAmount >= curElem.max){
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount:newAmount,
          };

        }else {
          return curElem;
        }
      });
      return {
        ...state,
        cart:updatedProduct,
      };
    }else{

    
    // console.log(`details products:${products.id}`);
    let cardProduct;
    cardProduct={
        "id":product.id,
        "title":product.title,
        "image":product.image,
        "price":product.price,
        "quantity":1,
    };
    
    // console.log(cardProduct)
return{
    ...state,
    cart:[...state.cart,cardProduct],
    
};
}
}
///remove item

if(action.type === 'REMOVE_ITEM'){
    return{
        ...state,
        cart:state.cart.filter((curlElem)=>{
            return curlElem.id !== action.payload
        })
    }
}

//add item
if(action.type === 'ADD_ITEM'){
    const updatedcart= state.cart.map((curlElem) => {
        if(curlElem.id === action.payload) {
            return { ...curlElem,quantity:curlElem.quantity + 1};
        }
        return curlElem;

    });
    return { ...state, cart: updatedcart };

  
}

//sub item
if(action.type === 'SUB_ITEM'){
    const updatedCart = state.cart
  .map((curElem) => {
    if (curElem.id === action.payload) {
      return { ...curElem, quantity: curElem.quantity - 1 };
    }
    return curElem;
  })
  .filter((curElem) => curElem.quantity !== 0);
return { ...state, cart: updatedCart };

  
}


//get total
if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.cart.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;

        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }

//clear cart

if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  return state;
  
    


}

export default Cartreducer