import React from 'react'

import { NavLink } from 'react-router-dom';
import { fetcher } from './fetcher/fetcher';
import useSWR from 'swr'
// import { fetcher } from './fetcher/fetcher';
// import useSWR from 'swr'

function Products() {
    const {data,error,isLoading} =  useSWR(`https://fakestoreapi.com/products/`,fetcher);

    if (error) return <div>Failed to fetch users.</div>
    if (isLoading) return <h2>Loading...</h2>

    

  



    const ShowProducts = () => {
        return (
            <>
            

                <div className="col-md-9 py-md-3">
                    <div className="row">
                        {data.map((product) => {
                            return (
                                <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>

                                    <div className="card h-100">
                                        <img src={product.image} className="m-3" style={{ height: "300px", width: "auto", objectFit: "contain" }} alt={product.title} />
                                        <div className="m-3 mb-0">
                                            <small className="card-title">{product.title.substring(0, 50)}...</small>
                                        </div>
                                        <div style={{ marginTop: "auto" }}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="m-3"><b>${product.price}</b></div>
                                                <NavLink className="stretched-link" to={`/product/${product.id}`}>
                                                    <button className="btn btn-sm m-3 border-primary">
                                                        <i className="fa fa-arrow-right text-muted"></i>
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>


            </>
        )
    }

    return (
        <div className="container">
            <div className="row">
            <ShowProducts />
                {/* {loading ? <Loading /> : <ShowProducts />} */}
            </div>
        </div>
    )
}

export default Products