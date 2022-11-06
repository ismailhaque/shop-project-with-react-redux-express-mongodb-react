import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createProduct } from '../../Redux/Products/action';

const CreateProduct = () => {

    // dispatch
    const dispatch = useDispatch()


    // use state
    const [input, setInput] = useState({
        name: '',
        r_price: '',
        s_price: '',
        stock: '',
        tage: [],
        category: [],
        file: '',
        gall: '',
        photo: '',
        gallary: []

    })

    // handle input change
    const handleInputChange = (e) => {
        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    // catefory handler
    const handleCategoryCheck = (e) => {
        if (e.target.checked) {

            let cats = input.category;
            cats.push(e.target.value)

            setInput((prev) => ({
                ...prev,
                category: cats
            }))

        } else {

            let cats = input.category;
            let newCats = cats.filter(data => data !== e.target.value)

            setInput((prev) => ({
                ...prev,
                category: newCats
            }))
        }
    }
    // tage handler
    const handleTageCheck = (e) => {
        if (e.target.checked) {

            let tages = input.tage;
            tages.push(e.target.value)

            setInput((prev) => ({
                ...prev,
                tage: tages
            }))

        } else {

            let tages = input.tage;
            let newTages = tages.filter(data => data !== e.target.value)

            setInput((prev) => ({
                ...prev,
                tage: newTages
            }))
        }
    }

    // handle product photo
    const handleProductPhoto = (e) => {
        setInput((prev) => ({
            ...prev,
            file: e.target.files[0]
        }))
    }
    // handle product gallary
    const handleProductGallary = (e) => {
        setInput((prev) => ({
            ...prev,
            gall: e.target.files
        }))
    }

    //  handle form
    const handleForm = async (e) => {
        e.preventDefault()

        const data = new FormData();

        data.append('name', input.name);
        data.append('r_price', input.r_price);
        data.append('s_price', input.s_price);
        data.append('stock', input.stock);
        data.append('tage', input.tage);
        data.append('category', input.category);
        data.append('photo', input.file);

        for (let i = 0; i < input.gall.length; i++) {
            data.append('gallary', input.gall[i]);
        }

        dispatch(createProduct(data))


        setInput(() => ({
            name: '',
            r_price: '',
            s_price: '',
            stock: '',
            tage: [],
            category: [],
        }))

        e.target.reset()

    }


    return (
        <div className='container my-5'>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <Link className='btn btn-primary' to="/admin/product">Back</Link>
                    <br />
                    <br />
                    <div className="card product shadow-sm">
                        <div className="card-body">
                            <h2>Add new product</h2>
                            <hr />
                            <form onSubmit={handleForm} method='POST' encType='multipart/form-data'>
                                <div className="my-3">
                                    <label htmlFor="">Name</label>
                                    <input name="name" className='form-control' value={input.name} onChange={handleInputChange} type="text" />
                                </div>

                                <div className="my-3">
                                    <label htmlFor="">Regular Price</label>
                                    <input className='form-control' name='r_price' value={input.r_price} onChange={handleInputChange} type="text" />
                                </div>

                                <div className="my-3">
                                    <label htmlFor="">Sale Price</label>
                                    <input className='form-control' name='s_price' value={input.s_price} onChange={handleInputChange} type="text" />
                                </div>

                                <div className="my-3">
                                    <label htmlFor="">Stock</label>
                                    <input className='form-control' name='stock' value={input.stock} onChange={handleInputChange} type="text" />
                                </div>

                                <div className="my-3">
                                    <label htmlFor="">Photo</label>
                                    <input name='photo' onChange={handleProductPhoto} className='form-control' type="file" />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Gallary</label>
                                    <input name='gallary' onChange={handleProductGallary} className='form-control' type="file" multiple />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Category</label>
                                    <hr />
                                    <label htmlFor="">
                                        <input type="checkbox" onChange={handleCategoryCheck} value="Men" /> Men
                                    </label>
                                    <br />
                                    <label htmlFor="">
                                        <input type="checkbox" onChange={handleCategoryCheck} value="Women" /> Women
                                    </label>
                                    <br />
                                    <label htmlFor="">
                                        <input type="checkbox" onChange={handleCategoryCheck} value="Electronic" /> Electronic
                                    </label>
                                    <br />
                                    <label htmlFor="">
                                        <input type="checkbox" onChange={handleCategoryCheck} value="Kid" /> Kid
                                    </label>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Tage</label>
                                    <hr />
                                    <label htmlFor="">
                                        <input type="checkbox" onChange={handleTageCheck} value="Eid" /> Eid
                                    </label>
                                    <br />
                                    <label htmlFor="">
                                        <input type="checkbox" onChange={handleTageCheck} value="Puja" /> Puja
                                    </label>
                                    <br />
                                    <label htmlFor="">
                                        <input type="checkbox" onChange={handleTageCheck} value="Dengu" /> Dengu
                                    </label>
                                </div>

                                <div className="my-3">
                                    <label htmlFor=""></label>
                                    <input className='btn btn-primary w-100' type="submit" value='Create' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CreateProduct;