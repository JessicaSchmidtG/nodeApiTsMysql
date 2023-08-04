import {Request, Response} from 'express';
import db from '../config/database';

async function listProducts(req: Request, res: Response) {
   db.connection.query('select * from products', (err, results)=> {
        console.log(results);
        if(err){
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true,
                message: 'Listagem de usuários realizada com sucesso.',
                data: results
            });
        }
   });
};


async function createProduct(req: Request, res: Response) {
    const querySql = 'insert into products(ds_name, ds_description, nm_value, ds_brand, ds_status) VALUES(?,?,?,?,?);';
    const params = Array(
        req.body.ds_name,
        req.body.ds_description,
        req.body.nm_value,
        req.body.ds_brand,
        req.body.ds_status
    );

    db.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            message: 'Cadastro de produto realizado com sucesso',
            data: results
        });
    }
)};

async function editProduct(req: Request, res: Response) {
    const idProduct = req.params.id;

    const querySql = 'update products set ds_name = ?, ds_description = ?, nm_value = ?, ds_brand = ?, ds_status = ? where id_product = ?';
    const params = Array(
        req.body.ds_name,
        req.body.ds_description,
        req.body.nm_value,
        req.body.ds_brand,
        req.body.ds_status,
        idProduct
    );
    db.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            message: 'Alteração realizada com sucesso.',
            data: results
        })      
    });
};


async function deleteProduct(req: Request, res: Response) {
    const idUser = req.params.id;

    const querySql = 'delete from products where id_product = ?';
    
    db.connection.query(querySql, [idUser], (err, results) => {
        res.json({
            message: 'Cliente apagado com sucesso',
        });   
    });
};

export default {
    listProducts,
    createProduct,
    editProduct,
    deleteProduct
};