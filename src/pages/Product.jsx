import React from 'react'
import './Product.css'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useCartContext } from '../context/Cartcontext'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useSWR from 'swr'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import fetcher from '../fetcher/fetcher';
import LoadingAnimations from '../components/LoadingAnimations';
import Card from '../containers/Card';

const  Product = () => {
     const displayconsole= (data)=>{
    window.alert(` 1 item ${data } is added to the cart`)

   }
   const {data,error,isLoading} =  useSWR(`https://fakestoreapi.com/products/${id}`,fetcher);

   if (error) return <div>Failed to fetch users.</div>
   if (isLoading) return  <LoadingAnimations/>

  let { id } = useParams()
  
  const {addtoCart} = useCartContext(); 
  let navigate = useNavigate();

 



    // let array = [1,2,3,4,5,6,7];
 


 

  return(
    <>
      <div className='detail'>
        <div className="image-container">
          <div className='image'>
          <img src={data.image} alt=""/>
          </div>
        
        </div>
        <div className="description">
          <div className='title'><h1>{data.title}</h1></div>
          <div className='des'>
          <p>{data.description}</p>
          </div>
          
          <span>
          <h3>Price:${data.price}</h3>
          {/* {console.log(data.id)} */}
           <NavLink 
           onClick={()=> addtoCart(data)} 
           to={'/cart'}>
          <button     className='cartbutton'> <ShoppingCartCheckoutIcon /></button>
          </NavLink> 
         
         
          <button  onClick={()=> [addtoCart(data),displayconsole(data.title)]}  className='cartbutton'><AddShoppingCartIcon/></button>
          <div><button className="back" onClick={() => navigate(-1)}> <ArrowBackIcon /></button></div>
          </span>
         
        </div>
      </div>  
      
      <div className="product_section  center">Recommended products for you</div>
    
      <div className='productitem' >
      
      {/* {
        array.map((product) => {
          
          return (
           <Card key={product.id} product={product} />
          )
        })
      } */}
</div>
    </>
  );
}






export default Product
