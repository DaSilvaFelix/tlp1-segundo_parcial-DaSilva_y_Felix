const db = require('../db/db');

const mostraProductos = (req, res)=>{
    res.json(db);
}
const mostarPorId = (req,res)=>{
    const id = parseInt(req.params.id);
    const searchProduct = db.find((product)=> product.id === id);
    res.json(searchProduct);
}
const AñadirProduct = (req,res)=>{
    const {name,quantity,price} = req.body
    const newProduct = db.push(
        {
        id: Math.floor(Math.random() * 100) + 1,
        name: name,
        quantity: quantity,
        price: price 
        })
        console.log(newProduct.id);      
    res.json(newProduct)
}
const actualizarProcut = (req, res)=>{
    const id = parseInt(req.params.id);
    const {name, price, quantity, } = req.body;

    const searchProduct = db.find((product)=> product.id === id);
    
    searchProduct.name = name;
    searchProduct.price = price.toFixed(2) ;
    searchProduct.quantity = quantity;
    res.json(searchProduct);
}

module.exports={
    mostraProductos,
    mostarPorId,
    AñadirProduct,
    actualizarProcut
}