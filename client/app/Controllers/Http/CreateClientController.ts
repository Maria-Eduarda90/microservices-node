import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CreateClientServices from 'App/Services/CreateClientService';
import KafkaProvider from 'Providers/KafkaProvider';

export default class CreateClientController {
  constructor(private kafkaProducer: KafkaProvider) {}
  public async handle({ request, response }: HttpContextContract) {
    
    const useCase = new CreateClientServices(this.kafkaProducer)

    try {
      const result = (await useCase.customerRegister(
        request.only([
          'name',
          'password',
          'email',
          'phone'
        ])
      )) as CreateClientRequestType

      return response.json(result)
    } catch (err) {
      return response.status(400).json(err)
    }
  }
}