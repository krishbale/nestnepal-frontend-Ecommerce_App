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
        removeItem(state,action){
           
            state.splice(action.payload,1)
        },
        increment(state,action){
      

            return [];
        },
        decrement(state,action){
      

            return [];
        },
        clearCart(state,action){
      

            return [];
        },
        

      

    },
)
export  default  UserSlice.reducer;
export  const { addtoCart,removeUser,deleteUsers} = UserSlice.actions;
