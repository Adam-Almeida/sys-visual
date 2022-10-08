import { Request, Response } from "express";


export class CreateCustomerController{
    async handle(req: Request, res: Response){
        const { ...data } = req.body


        res.json(data.user_id)
    }
}