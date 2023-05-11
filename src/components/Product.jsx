import React, { useState } from 'react'
import { useParams } from 'react-router';
import ShowDetails from './ShowDetails';

import useSWR from 'swr'
import { fetcher } from './fetcher/fetcher';

function Product() {

 
    
    const { id } = useParams();

   
    const {data,error,isLoading} =  useSWR(`https://fakestoreapi.com/products/${id}`,fetcher);
    
    
    if (error) return <div>Failed to fetch users.</div>
    if (isLoading) return <h2>Loading...</h2>
    else {
        return (
            <>
                <div className="container px-0 mb-5" style={{ marginTop: "66px" }}>
                <ShowDetails data={data} error={error} isLoading = {isLoading} />
                   
    
                </div>
            </>
        )
    }
  
}

export default Product