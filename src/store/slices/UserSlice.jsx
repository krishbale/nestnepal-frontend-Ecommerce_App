import { createSlice } from "@reduxjs/toolkit";
const getLocalCartData = () =>{
  
    let getLocalCartData = localStorage.getItem("Cart");
    const parseData = JSON.parse(getLocalCartData);
    if(!Array.isArray(parseData)) return [];
    return parseData;
}
const UserSlice = createSlice({
    
    name:'user',
    initialState:{
        cart: getLocalCartData(),
        totalAmount:0,
        totalItem:0,
    },
    reducers:{
        addtoCart(state,action){
          
            const product  = action.payload;
            // console.log(product)
            let existingProduct = state.cart.find(
                (curElem) => curElem.id === product.id
              );
            //   console.log(existingProduct)
              if(existingProduct){
                let updatedProduct = state.cart.map((curElem) =>{
                  if(curElem.id === product.id){
                    let newAmount = curElem.amount + product.price;
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
                
                console.log(cardProduct)
            return{
                ...state,
                cart:[...state.cart,cardProduct],
                
                
            };
            }
            }
        }, 

      
        increment(state,action){
      

            const updatedcart= state.cart.map((curlElem) => {
                if(curlElem.id === action.payload) {
                    return { ...curlElem,quantity:curlElem.quantity + 1};
                }
                return curlElem;
        
            });
            return { ...state, cart: updatedcart };
        },
        decrement(state,action){
      
            return{
                ...state,
                cart:state.cart.filter((curlElem)=>{
                    return curlElem.id !== action.payload
                })
            }
        },
        clearCart(state,action){
      

            return { ...state, cart: [] };
                 }
                 ,
                 gettotal(state,action){
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

        
        

      

    },
    
)
export  default  UserSlice.reducer;
export  const { addtoCart,increment,decrement,gettotal,clearCart} = UserSlice.actions;
