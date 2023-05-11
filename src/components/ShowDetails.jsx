import { NavLink } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { addtoCart } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux';

const ShowDetails = ({data ,error ,isLoading}) => {
   
    const dispatch = useDispatch();
    const {id,title,image,description,category,price,rating} = data;
    // const navigate = useNavigate();
  
    const handleclick = () => {
        // console.log(data);
        dispatch(addtoCart(data))
    }
    if (error) return <div>Failed to fetch users.</div>
    if (isLoading) return <h2>Loading...</h2>
    if(!isLoading){
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
                                            <img id="main-image" alt="product" src={image} width="250" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="border p-4">
                                        <div className="mt-4 mb-3">
    
                                        <span className="text-muted text-capitalize"> in {category}</span>
    
                                            <h5 className="text-uppercase">
                                                {title}
                                            </h5>
    
                                            Rating {rating && rating.rate}
                                            <i className="fa fa-star text-warning"></i>
    
                                            <div className="price d-flex flex-row align-items-center">
                                                <big className="display-6"><b>${price}</b></big>
                                            </div>
                                        </div>
                                        <p className="text-muted">{description}</p>
                                        <div  className="cart mt-4 align-items-center"> 
                                        <button onClick={handleclick}  className="btn btn-outline-dark text-uppercase mr-2 px-4">
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
   
      
    
}
export default ShowDetails