import React, { useState } from 'react'

import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import styled from 'styled-components';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Button } from './Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import { Wrapper } from './Cart.style'

import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem';
import {  Drawer } from '@mui/material';
import { useCartContext } from '../context/Cartcontext';
const Cartui = () => {

  const navigate = useNavigate();
  const [loading, isloading] = useState(false);
  const { cart, removeItem, clearCart, totalItem, totalAmount, increment, decrement } = useCartContext()
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
      <Button onClick={clearCart}><RemoveShoppingCartIcon /> Remove All</Button>
      </div>
      
        <br />
       <div>
       <Button  onClick={ () =>  navigate('/checkoutpage')}>Checkout</Button>
       </div>
       
        <br />
        {/* <Button  onClick={() => navigate('/')} >Continue shopping:</Button> */}
     
      </>}
      
      
    </Wrapper>







  



    </>
  )
};

export default Cartui