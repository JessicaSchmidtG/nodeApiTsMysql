const express = require("express");

import userController from "../controller/userController";

const router = express.Router();

//Listar registros
router.get('/users', userController.listUsers);

//Cadastrar usuario
router.post('/users', userController.createUser);
    
//Editar usuario
router.put('/user/:id', userController.editUser);
   

router.delete('/user/:id', userController.deleteUser);

export default router;