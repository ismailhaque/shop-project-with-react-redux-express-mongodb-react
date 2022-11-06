import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const SingleProduct = ({ single, handleSingleHide }) => {


    // use selector
    const { products, getSingleProduct, error, skliton } = useSelector(state => state.products)

    return (

        <Modal show={single} onHide={handleSingleHide} animation={true} centered size='lg'>
            <Modal.Body>
                <div className="single-product">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`/images/products/${getSingleProduct.photo}`} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="single my-5">
                                <h2>{getSingleProduct.name}</h2>
                                <h3>Price : {getSingleProduct.r_price}</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste recusandae ipsa earum! Optio, placeat eum.</p>
                                <button className='btn btn-lg btn-dark'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>


    )
};

export default SingleProduct;