import { Request, Response } from "express";
import { CreateProductUseCase } from "../usecase/create-product.usecase";

export class CreateProductController {
    async handle(request: Request, response: Response){
        const useCase = new CreateProductUseCase();
        try {
            const result = await useCase.execute(request.body);
            return response.status(200).json(result);
        } catch(err){
            return response.status(400);
        }
    }
}