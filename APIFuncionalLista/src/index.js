const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

//  (configuracion del port)
app.set('port',process.env.PORT || 3000);

// Midleware
app.use(express.json());
app.use(cors());
   

//rutas
app.use(require('./routes/users'));
app.use(require('./routes/pacientes'));
app.use(require('./routes/login'));


// INICIALIZA EL SERVIDOR
app.listen(app.get('port'),()=>{
    console.log('Server log on port',app.get('port'))
});


//----adminitir ------------------------------
app.use(express.json())