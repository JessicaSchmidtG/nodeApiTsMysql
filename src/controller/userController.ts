import {Request, Response} from 'express';
import db from '../config/database';

async function listUsers(req: Request, res: Response) {
   db.connection.query('select * from clients_ecommerce', (err, results)=> {
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


async function createUser(req: Request, res: Response) {
    const querySql = 'insert into clients_ecommerce(ds_name, nm_cpf, fl_status) VALUES(?,?,?);';
    const params = Array(
        req.body.ds_name,
        req.body.nm_cpf,
        req.body.fl_status
    );

    db.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            message: 'Cadastro realizado com sucesso',
            data: results
        });
    }
)};

async function editUser(req: Request, res: Response) {
    const idUser = req.params.id;

    const querySql = 'update clients_ecommerce set ds_name = ?, nm_cpf = ?, fl_status = ? where id_client = ?';
    const params = Array(
        req.body.ds_name,
        req.body.nm_cpf,
        req.body.fl_status,
        idUser
    );
    db.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            message: 'Alteração realizada com sucesso.',
            data: results
        })      
    });
};


async function deleteUser(req: Request, res: Response) {
    const idUser = req.params.id;

    const querySql = 'delete from clients_ecommerce where id_client = ?';
    
    db.connection.query(querySql, [idUser], (err, results) => {
        res.json({
            message: 'Cliente apagado com sucesso',
        });   
    });
};

export default {
    listUsers,
    createUser,
    editUser,
    deleteUser
};