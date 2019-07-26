const conexionMysql = require('../database/database');
const jwt = require('../middlewares/jwt');

exports.crear = function (req, res) {
    const {username, password, nombres, apellidos, dni, rol} = req.body;
    const query = 'CALL SP_insert_usuario (?, ?, ?, ?, ?, ?)';

    conexionMysql.query(query, [username, password, nombres, apellidos, dni, rol], function (error, rows){
        if(!error){         
            res.json({
                status: 'success',
                code:200,
                message: "Creado"
            });                                    
        }else{
            res.json(error);
        }
    })
};

exports.modificar =  function (req, res){
    const username = req.user.username;
    const {nombres, apellidos, dni} = req.body;
    const query = 'CALL SP_modificar_usuario(?, ?, ?, ?)';
    conexionMysql.query(query, [username, nombres, apellidos, dni], function(error, rows){
        if(!error){
            if(rows.affectedRows === 1){
                res.json({
                    status: 'success',
                    code:200,
                    message: "Modificado"
                });
            }else{
                res.json({
                    status: 'empty',
                    code:300,
                    message:"No se pudo modificar"
                });
            }   
        }else {
            res.json(error);
        }
    });
};

exports.eliminar = function (req, res){
    const username = req.user.username;
    const query = 'CALL SP_eliminar_usuario(?)';
    conexionMysql.query(query, [username], function(error, rows){
        if(!error){
            if(rows.affectedRows === 1){
                res.json({
                    status: 'success',
                    code:200,
                    message: "Eliminado"
                });
            }else{
                res.json({
                    status: 'empty',
                    code:300,
                    message:"No se pudo eliminar"
                });
            }
        }else{
            res.json(error);
        }
    });
};

exports.listar = function (req, res){
    const query = 'SELECT * FROM vista_usuarios';
    conexionMysql.query(query, function(error, rows){
        if(!error){
            res.json({
                status: 'success',
                code:200,
                resultado:rows
            });
        }else{
            res.json(error);
        }
    })
};

exports.mostrar = function (req, res){
    const username = req.params.id;
    const query = 'SELECT * FROM usuario WHERE username = ?';
    conexionMysql.query(query, [username], function(error, rows){
        if(!error){
            if(rows[0].length===0){
                res.json({
                    status: 'empty',
                    code:300,
                    message:"No hay ningun"
                });
            }else{
                res.json({
                    status: 'success',
                    code:200,
                    resultado:rows[0]
                });
            }           
        }else{
            res.json(error);
        }
    })
}