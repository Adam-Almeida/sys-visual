import { BadRequestError } from "@/errors/ApiErrors";
import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";


export class CreateCustomerController{
    async handle(req: Request, res: Response){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          throw new BadRequestError(errors.array()[0].msg)
        }
        const data = matchedData(req)
    
        const { ...dataB } = data


        res.json(dataB)
    }
}