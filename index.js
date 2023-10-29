const path = require('path');
const express= require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);

require('dotenv').config({path:'./variables.env'})

//Importar variable
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3500;

// settings
app.set('port', port );

// middlewares
app.use(cors());

// app.use(express.json());
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({ limit: '5mb', extended: true}));


app.get('/texto',(req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Este es un mensaje de texto.');
    console.log("GET con texto");
})

app.get('/json',(req,res)=>{
    const jsonResponse = { mensaje: 'Este es un mensaje JSON' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonResponse));
    console.log("GET con json");
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'html','asignacion1.html'));
    console.log("GET con html");
})


http.listen(port, ()=>{
    console.log('Servidor iniciado', port, host);
})