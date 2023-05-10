
import { useState } from 'react'
import './Products.css'
import LoadingAnimations from '../containers/LoadingAnimatins';
import Card from '../containers/Card';


function Products() {

    const {data,error,isLoading} =  useSWR(`https://fakestoreapi.com/products/`,fetcher);

    if (error) return <div>Failed to fetch users.</div>
    if (isLoading) return <LoadingAnimations />
 const [query,setQuery] = useState('');

 


let array = [1,2,3,4]

   const handleSearch =  (e) => {
    
    
   
    const results = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results)

    
   }
   

  


 

  return (
    <> 
    <section className="announcement">
    
             <input placeholder='Search'  className='search' type="text" 
              onChange={(e) =>  [setQuery(e.target.value),handleSearch()]}  />


    </section >

 
    
  
    
    
    
      <div className={`productitem ${hidemenu ? ' hide' : ''} `}>
     
     {data.map((product) => {
     
       return (
         
        <Card key={product.id} product={product} />
       )
     })}
   </div>
    </>
  )
}

export default Products

