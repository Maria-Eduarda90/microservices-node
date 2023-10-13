import { prismaClient } from "../../config/prisma/prismaClient";

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

    return customerCreated;
  }
}