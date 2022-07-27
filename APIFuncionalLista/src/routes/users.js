const express = require('express')
const router = express.Router()
const mySqlConnection = require('../database')

//--------agregar rutas--------
//-----get  equipo---listo-----
router.get('/equipo',(req,res)=>{
    mySqlConnection.query('SELECT * FROM tb_equipo ',(err,rows,fields)=>{
        if(!err)
        {
            res.json(rows)
        }
        else
        {
            console.log(err)
        }
    })
})

//-----fin get ----------


//-----muestra equipo con id-------  listo------------------
router.get('/equipo/:id',(req,res)=>{
   let {id} = req.params
    mySqlConnection.query('SELECT * FROM tb_equipo WHERE id_equipo=?',id,(err,rows,fields)=>{
        if(!err)
        {
            res.json(rows)
        }
        else
        {
            console.log(err)
        }
    })
})

//-------------------fin ---------------------


//----------------agregar -----listo--------------

router.post('/equipo/',(req,res)=>{
    
    const {nombre} = req.body
    const {logo} = req.body
    
    const query = `INSERT INTO tb_equipo (nombre,logo) VALUES ('${nombre}', '${logo}')`
    
    mySqlConnection.query(query,(err,rows,fields)=>{
        if(!err)
        {
            res.json({status:'usuario agregado'})
        }
        else
        {
            console.log(err)
        }
    })
})

//------------------------fin agregar-------


 
//--------------actualizar/editar datos-----listo -----------
router.put('/equipo/:id',(req,res)=>{
    let {id} = req.params
    const {nombre} = req.body
    const {logo} = req.body
    
    const query = `UPDATE tb_equipo SET 
                    nombre = '${nombre}',
                    logo = '${logo}'
                    WHERE id_equipo= '${id}'`
    
    
        mySqlConnection.query(query,(err,rows,fields)=>{
        if(!err)
        {
            res.json({status:'Usuario Actualizado'})
        }
        else
        {
            console.log(err)
        }
    })
})
//------------fin actualizar---------





//------------borrar dato----Listo---------
router.delete('/equipo/:id',(req,res)=>{
    const {id} = req.params
    mySqlConnection.query('DELETE FROM tb_equipo where id_equipo = ?',id,(err,rows,fields)=>{
        
        if(!err)
        {
            res.json({status:'Usuario Eliminado'})
        }
        else
        {
            console.log(err)
        }
    })
})



module.exports = router