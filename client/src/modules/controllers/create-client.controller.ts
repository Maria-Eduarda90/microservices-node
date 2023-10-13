import { Request, Response } from 'express';
import { CreateClientUseCase } from '../usecase/client-client.usecase';

export class CreateClientController{
    async handle(request: Request, response: Response){
        const useCase = new CreateClientUseCase();
        try{
            const result = await useCase.execute(request.body);
            return response.status(200).json(result);
        } catch(err){
            return response.status(400).json(err);
        }
    }
}