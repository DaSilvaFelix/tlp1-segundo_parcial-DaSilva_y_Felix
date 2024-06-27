const express = require('express');
const cors =  require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(3000, ()=>{
    console.log('servidor corriendo en el puerto 3000');
})