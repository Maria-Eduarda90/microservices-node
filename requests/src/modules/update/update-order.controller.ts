import { Request, Response } from "express";
import { UpdateOrderUseCase } from "./update-order.usecase";

export class UpdateOrderController {
    async handle(request: Request, response: Response){
        const useCase = new UpdateOrderUseCase();
        try {
            const result = await useCase.execute(request.body);
            return response.status(200).json(result);
        } catch(err){
            return response.status(400);
        }
    }
}