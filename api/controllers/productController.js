
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import createError from "./errorController.js";
import productModels from '../models/productModels.js'
import fs from 'fs'
import path, { resolve } from 'path';


// dirname
const __dirname = resolve()


/**
 * @access public
 * @route api/User
 * @method get
 */

export const getAllProducts = async ( req, res, next ) => {

    try {

        const products = await productModels.find()
        res.status(200).json(products);

    } catch (error) {

        next(error);

    }

};

/**
 * @access public
 * @route api/User
 * @method create
 */

export const createProduct = async ( req, res, next ) => {

    try {

        let gallary = [];

        for (let i = 0; i < req.files.gallary.length; i++) {
            gallary.push(req.files.gallary[i].filename)
        }

        let product = await productModels.create({
            ...req.body,
            photo : req.files.photo[0].filename,
            gallary : gallary,
            category : req.body.category.split(','),
            tage : req.body.tage.split(',')
        })
        
        res.status(200).json({

            message : "Product create successfully",
            product : product

        });

    } catch (error) {

        next(error);

    }

};

/**
 * @access public
 * @route api/User:id
 * @method get
 */

 export const getSingleProduct = async ( req, res, next ) => {

    const { id } = req.params;

    try {

        const product = await productModels.findById( id )

        if ( !product ) {

            return createError(404, 'Single product not found');

        } else {

            res.status(200).json(product);

        }

    } catch (error) {

        next(error);

    }

};

/**
 * @access public
 * @route api/user:id
 * @method delete
 */

 export const deleteProduct = async ( req, res, next ) => {

    const { id } = req.params;

    try {

        const product = await productModels.findByIdAndDelete( id );

        fs.unlinkSync(path.join(__dirname, `api/public/images/products/${product.photo}`))

        product.gallary.map(data => {
            fs.unlinkSync(path.join(__dirname, `api/public/images/products/${data}`))
        })

        res.status(200).json({
            message : 'product delete successfully'
        });

    } catch (error) {

        next(error);

    }

};

/**
 * @access public
 * @route api/user:id
 * @method put/patch
 */

 export const updateProduct = async ( req, res, next ) => {

    const { id } = req.params;

    try {

        const product = await productModels.findByIdAndUpdate( id, req.body, { new : true } )

        res.status(200).json(product);

    } catch (error) {

        next(error);

    }

}