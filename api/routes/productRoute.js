import express from 'express';
import multer from 'multer';
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from '../controllers/productController.js';
import path, { resolve } from 'path';




// init router
const router = express.Router();
const __dirname = resolve();
const storage = multer.diskStorage({

    filename : (req, file, cb) => {
        cb(null, Date.now()+('_')+file.originalname)
    },
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, 'api/public/images/products/'))
    }
})

const productMulter = multer({
    storage
}).fields([
    {
        name : "photo",
        maxCount : 1
    },
    {
        name : "gallary",
        maxCount : 10
    }
]);

// Rest api route
router.route('/').get(getAllProducts)
router.route('/').post(productMulter, createProduct);
router.route('/:id').get(getSingleProduct).delete(deleteProduct).put(updateProduct).patch(updateProduct);

// export router
export default router;