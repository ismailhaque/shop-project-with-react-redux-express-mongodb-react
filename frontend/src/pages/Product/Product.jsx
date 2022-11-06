import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { deleteProduct, singleProduct } from '../../Redux/Products/action';
import SingleProduct from '../Shop/SingleProduct';
import './Product.css';

const Product = () => {

    // use selector
    const { products, getSingleProduct, error, skliton } = useSelector(state => state.products)


    // dispatch
    const dispatch = useDispatch();

    const [single, setSingle] = useState(false);

    const handleSingleShow = (id) => {

        dispatch(singleProduct(id))
        setSingle(true)

    };


    // delete product
    const handleSingleProduct = (e, id) => {
        e.preventDefault()

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(deleteProduct(id))

                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }


    const handleSingleHide = () => setSingle(false);
    return (
        <div className='container my-5'>
            <div className="row justify-content-center">
                <SingleProduct single={single} handleSingleHide={handleSingleHide} />
                <div className="col-md-10">
                    <Link className='btn btn-primary' to="/admin/product/create">Add new</Link> &nbsp;
                    <Link className='btn btn-warning' to="/">View Shop</Link>
                    <br />
                    <br />
                    <div className="card product shadow-sm">
                        <div className="card-body">
                            <h2>All products</h2>
                            <hr />
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Regular Price</th>
                                        <th>Sale Price</th>
                                        <th>Stock</th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        products.map((data, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{data.name}</td>
                                                <td>{data.r_price}</td>
                                                <td>{data.s_price}</td>
                                                <td>{data.stock}</td>
                                                <td><img src={`/images/products/${data.photo}`} alt="" /></td>
                                                <td>
                                                    <a onClick={() => handleSingleShow(data._id)} className='text-info' href="#"><i className='fa fa-eye'></i></a>
                                                    <a className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                                    <a onClick={(e) => handleSingleProduct(e, data._id)} className='text-danger' href="#"><i className='fa fa-trash'></i></a>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;