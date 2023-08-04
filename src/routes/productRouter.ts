const express = require("express");

import productController from "../controller/productController";

const router = express.Router();

//Listar registros
router.get('/products', productController.listProducts);

//Cadastrar usuario
router.post('/products', productController.createProduct);
    
//Editar usuario
router.put('/product/:id', productController.editProduct);
   
router.delete('/product/:id', productController.deleteProduct);

export default router;