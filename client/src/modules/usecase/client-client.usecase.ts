import { prismaClient } from "../../config/prisma/prismaClient";
import { KafkaSendMessage } from "../../provider/kafka/producer";

export class CreateClientUseCase {
  constructor() {}

  async execute(data: ClientUseCaseType) {
    const customer = await prismaClient.client.findFirst({
        where: {
            email: data.email
        }
    });

    if(customer) throw new Error("Esse email já existe").message;

    const customerCreated = await prismaClient.client.create({
      data: {
        ...data
      }
    });

    const kafkaprovider = new KafkaSendMessage();
    await kafkaprovider.execute('CUSTOMER_CREATED', customerCreated);

    return customerCreated;
  }
}