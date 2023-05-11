import { Drawer } from '@mui/material';
import React ,{useState} from 'react'
import Cartui from './Cartui';
import useSWR from 'swr'
import { NavLink } from 'react-router-dom';
import Searchresult from './searchresult';

import { fetcher } from './fetcher/fetcher';
const Navbar = () => {
  

    const [query,setQuery] = useState('');
    const [filter,setFilter] = useState([])
   
    const [cartOpen, setCartOpen] = useState(false);
    const {data,error,isLoading} =  useSWR(`https://fakestoreapi.com/products/`,fetcher);

    if (error) return <div>Failed to fetch users.</div>
    if (isLoading) return <h2>Loading...</h2>
    const handlesearch =(e) =>{
        // console.log(query);
      const results =  data.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()))
        setFilter(results);
        // console.log(results);
        
    }
    return (
        <div>


            <nav className="navbar bg-light fixed-top shadow">
                <div className="container-fluid container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i className="fa fa-bars"></i>
                    </button>
                    <NavLink to="/">
                        <img src="/nestnepal.png" alt="logo" style={{ height: "50px" }} />
                    </NavLink>

                    <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}> 
                <Cartui  />

                 </Drawer>
                    <button onClick={() => setCartOpen(true)} className="navbar-toggler" type="button">
                        <i className="fa fa-shopping-cart"></i>
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <NavLink to="/">
                                <img src="/nestnepal.png" alt="logo" style={{ height: "50px" }} />
                            </NavLink>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <input onChange={(e) =>[setQuery(e.target.value),handlesearch()]} className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                                {filter.map((product) => {
                                    return (
                                        <Searchresult key={product.id} product={product} />
                                    )
                                })
                                     
                                      
                                    }
                                
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar;