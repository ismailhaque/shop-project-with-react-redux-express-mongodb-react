import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import CreateProduct from "./pages/Product/CreateProduct";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import './App.css';
import { useEffect } from "react";
import { getAllProduct } from "./Redux/Products/action";


function App() {

  //  dispatch
  const dispatch = useDispatch()

  // get all product
  useEffect(() => {

    dispatch(getAllProduct())

  }, [dispatch])


  return (
    <>

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/product/create" element={<CreateProduct />} />
      </Routes>

    </>
  );
}

export default App;
