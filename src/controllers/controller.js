const db = require('../db/db');

const mostraProductos = (req, res)=>{
    res.json(db);
}


module.exports={
    mostraProductos
}