import express from "express";
import * as ProductController from "../controllers/ProductControllers.js";
 
const {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} = ProductController;
 
const router = express.Router();
 
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', saveProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
 
export default router;
