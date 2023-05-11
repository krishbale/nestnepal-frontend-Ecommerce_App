import React from 'react'

import { Wrapper } from './cartitem.style'

import { useDispatch } from 'react-redux';

const CartItem = ({ curElem }) => {
  
  const dispatch = useDispatch();


    const { id,price ,quantity,title,image} = curElem;
  return (
    <>
     <Wrapper>
      <div>
        <h3>{curElem.title}</h3>
        <div className="information">
          <p> Price :${price}</p>
          <br />
         
          <p>Sets: {quantity}</p>
          <br />
          <p>Sub-Total: ${(price * quantity).toFixed(2)}</p>
      
        </div>
     
          <p>{curElem.amount}</p>
         
      
      </div>
      <img src={image} alt={title} />
      
    </Wrapper>
   
   

    </>
 
  )
}

export default CartItem;
