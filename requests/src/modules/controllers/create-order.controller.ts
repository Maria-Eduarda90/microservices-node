import { Request, Response } from 'express';
import { CreateOrderUseCase } from '../usecase/create-order.usecase';

export class CreateOrderController {
    constructor(){}

    async handle(request: Request, response: Response){
        const useCase = new CreateOrderUseCase();
        try {
            const order = await useCase.execute(request.body);
            return response.status(200).json(order);
        } catch(err){
            return response.status(400);
        }
    }
}