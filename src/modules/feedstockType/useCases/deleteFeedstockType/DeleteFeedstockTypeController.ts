import { BadRequestError } from "@/errors/ApiErrors";
import uuidValidate from "@/utils/uuidValidate";
import { Request, Response } from "express";
import { DeleteFeedstockTypeUseCase } from "./DeleteFeedstockTypeUseCase";

export class DeleteFeedstockTypeController {
  async handle(req: Request, res: Response) {
    const { id } = req.body
    const uuidValid = await uuidValidate(id)

    if (!uuidValid) {
      throw new BadRequestError('O id informado não parece válido.')
    }

    const deleteFeedstockTypeUseCase = new DeleteFeedstockTypeUseCase()
    await deleteFeedstockTypeUseCase.execute(id)

    return res.status(200).json({ message: 'O tipo de insumo foi removido com sucesso' })
  }
}
