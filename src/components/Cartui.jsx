import React, { useState } from 'react'

import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import {Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { Wrapper } from './Cartui.style';
import { useNavigate } from 'react-router-dom'

import {  Drawer } from '@mui/material';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const cartSelector = store => store.users.cart;
const totalAmountSelector = store => store.users.totalAmount;
const totalItemSelector = store => store.users.totalItem;


const Cartui = () => {
    
    const cart = useSelector(cartSelector);
    const totalAmount = useSelector(totalAmountSelector);
    const totalItem = useSelector(totalItemSelector);
    // console.log(cart);

   // Access the 'cart' property from the Redux state

    const dispatch = useDispatch();

    const navigate = useNavigate();
   
  
    return (
      <>
 
       <Wrapper>
        <h2>Your Cart</h2>
        {cart.length === 0 ? <p>No items in cart.</p> : null}
         {cart.map((curElem,index) => (
          <CartItem
            key={index}
            curElem={curElem}
          />
        ))}
      
        <h2>Total Set:{cart.length}</h2>
        <h2>Total: ${totalAmount}</h2>
        {cart.length && <>
        <div>
        <Button><RemoveShoppingCartIcon /> Remove All</Button>
        </div>
        
          <br />
         <div>
          <Button  onClick={ () =>  navigate('/checkoutpage')}>Checkout</Button> 
         </div> 
         
          <br /> 
           <Button  onClick={() => navigate('/')} >Continue shopping:</Button> 
       
         </>} 
        
        
      </Wrapper>  
  
  
  
  
  
  
  
    
  
  
  
      </>
    )
  };
  
  export default Cartui