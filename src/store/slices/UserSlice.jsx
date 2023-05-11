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
       
        

      

    },
    
)
export  default  UserSlice.reducer;
export  const {   addtoCart} = UserSlice.actions;
