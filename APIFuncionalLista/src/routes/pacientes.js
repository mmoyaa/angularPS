const { query } = require('express')
const express = require('express')
const router = express.Router()
const mySqlConnection = require('../database')

router.get('/pacientes', (req, res) =>{
    mySqlConnection.query('SELECT * FROM pacientes ',(err,rows,fields)=>{
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
//--------------agregar paciente--------------------------------
router.post('/pacientes', (req, res) =>{
    const{NOMBRE,APELLIDO,EDAD,DIAGNOSTICO,EVALUADO,CURSO,FICHA}=req.body
    let ID = 0;
    const query = `
        CALL editaragregarpacientes(?,?,?,?,?,?,?,?);
    `
    mySqlConnection.query(query,[NOMBRE,APELLIDO,EDAD,DIAGNOSTICO,EVALUADO,CURSO,FICHA,ID],(err,rows,fields)=>{
        if(!err)
        {
            res.json({status:'Paciente agregado'})
        }
        else
        {
            console.log(err)
        }

    })
})


//-------edaitar pacientes-----

router.put('/pacientes/:ID', (req, res)=>{
    const{NOMBRE,APELLIDO,EDAD,DIAGNOSTICO,EVALUADO,CURSO,FICHA}=req.body
    const {ID} = req.params
    const query = `
    CALL editaragregarpacientes(?,?,?,?,?,?,?,?);
`
mySqlConnection.query(query,[NOMBRE,APELLIDO,EDAD,DIAGNOSTICO,EVALUADO,CURSO,FICHA,ID],(err,rows,fields)=>{
    if(!err)
    {
        res.json({status:'Paciente Editado'})
    }
    else
    {
        console.log(err)
    }

})
})



module.exports = router;