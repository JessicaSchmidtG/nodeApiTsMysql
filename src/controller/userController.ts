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

/*
async function createUser(req: Request, res: Response) {
    const querySql = 'insert into clients(DS_NAME, NM_CELLPHONE, DS_STATUS) VALUES(?,?,?);';
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS
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

    const querySql = 'update clients set DS_NAME = ?, NM_CELLPHONE = ?, DS_STATUS=? where ID_CLIENT = ?';
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS,
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

    const querySql = 'delete from clients where ID_CLIENT = ?';
    
    db.connection.query(querySql, [idUser], (err, results) => {
        res.json({
            message: 'Cliente apagado com sucesso',
        });   
    });
};
  */  
export default {
    listUsers,
    //createUser,
    //editUser,
    //deleteUser
};