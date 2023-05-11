import React, { useState } from 'react'

import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import {Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { Wrapper } from './Cartui.style';
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const cartSelector = store => store.users.cart;



const Cartui = () => {
    
    const cart = useSelector(cartSelector);
   
    // console.log(cart);

   // Access the 'cart' property from the Redux state


    const navigate = useNavigate();
   
  
    return (
      <>
 
       <Wrapper>
        <h2>Order Summary</h2>
        {cart.length === 0 ? <p>No items in cart.</p> : null}
         {cart.map((curElem,index) => (
          <CartItem
            key={index}
            curElem={curElem}
          />
        ))}
      
        <h2>Total Set:{cart.length}</h2>
        <h2>Total: </h2>
        {cart.length && <>
        <div>
        <Button><RemoveShoppingCartIcon /> Remove All</Button>
        </div>
        
          <br />
         <div>
          <Button  onClick={ () =>  navigate('/checkout')}>Checkout</Button> 
         </div> 
         
          <br /> 
           <Button  onClick={() => navigate('/')} >Continue shopping:</Button> 
       
         </>} 
        
        
      </Wrapper>  
  
  
  
  
  
  
  
    
  
  
  
      </>
    )
  };
  
  export default Cartui