import React, { useState } from 'react'
import { useParams } from 'react-router';

import { NavLink } from 'react-router-dom';
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom';
import { fetcher } from './fetcher/fetcher';
import { useCartContext } from '../ContextAPI/cartcontext';
function Product() {
 
    const navigate = useNavigate();
    const {addtoCart} = useCartContext;
    const { id } = useParams();

   
    const {data,error,isLoading} =  useSWR(`https://fakestoreapi.com/products/${id}`,fetcher);

    if (error) return <div>Failed to fetch users.</div>
    if (isLoading) return <h2>Loading...</h2>


 
       
 
   

    const ShowDetails = () => {
        
        return (
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <NavLink className="text-decoration-none text-dark" to={`/`}>
                            <div className="d-flex align-items-center m-3">
                                <i className="fa fa-long-arrow-left"></i>
                                <span className="ml-1">&nbsp;Back</span>
                            </div>
                        </NavLink>
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <img id="main-image" alt="product" src={data.image} width="250" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="border p-4">
                                        <div className="mt-4 mb-3">

                                        <span className="text-muted text-capitalize"> in {data.category}</span>

                                            <h5 className="text-uppercase">
                                                {data.title}
                                            </h5>

                                            Rating {data.rating && data.rating.rate}
                                            <i className="fa fa-star text-warning"></i>

                                            <div className="price d-flex flex-row align-items-center">
                                                <big className="display-6"><b>${data.price}</b></big>
                                            </div>
                                        </div>
                                        <p className="text-muted">{data.description}</p>
                                        <div  className="cart mt-4 align-items-center"> 
                                        <button  className="btn btn-outline-dark text-uppercase mr-2 px-4">
                                        Buy</button>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container px-0 mb-5" style={{ marginTop: "66px" }}>
            <ShowDetails />
               

            </div>
        </>
    )
}

export default Product