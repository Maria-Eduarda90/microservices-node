import { prismaClient } from "../../config/prisma/prismaClient";
import { CreateOrderType } from "../@types/CreateOrderType";

export class CreateOrderUseCase {
    constructor(){}

    async execute(data: CreateOrderType){
        const order = await prismaClient.order.create({
          data: {
            customerId: data.customerId,
            OrderItems: {
               create: data.items,
            },
            status: "AGUARDANDO_PAGAMENTO",
          },
        });

        return order;
    }
}