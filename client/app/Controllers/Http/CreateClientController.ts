import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CreateClientServices from 'App/Services/CreateClientService';

export default class CreateClientController {
  public async handle({ request, response }: HttpContextContract) {
    const useCase = new CreateClientServices()
    
    try {
      const result = await useCase.execute(request.only([
          'name',
          'password',
          'email',
          'phone'
      ])) as CreateClientRequestType;

      return response.json(result)
    }catch(err){
      return response.status(400).json(err)
    }
  }
}