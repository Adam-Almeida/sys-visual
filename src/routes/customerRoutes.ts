import { Router } from "express";

const customerRoutes = Router()

//list all customers
customerRoutes.get('/customers', (req, res)=>{
    res.json({hellow: true})
})

//get customer by id
customerRoutes.get('/customer/:id', (req, res)=>{
    res.json({hellow: true})
})

//get customer by user
customerRoutes.get('/customer/:user_id', (req, res)=>{
    res.json({hellow: true})
})

//create complete customer 
customerRoutes.post('/customer', (req, res)=>{
    res.json({hellow: true})
})



export default customerRoutes