const mysql = require('mysql')

const mySqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bd_ps'

})

mySqlConnection.connect(function(err){
    if(err)
    {
        console.log(err)
        return;
    }
    else
    {
        console.log('DB se conecto')
    }
})

module.exports=mySqlConnection