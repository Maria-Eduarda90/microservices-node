import { prismaClient } from "../../config/prisma/prismaClient";
import { KafkaSendMessage } from "../../providers/kafka/producer";
import { UpdateOrderType } from "../@types/UpdateOrderType";

export class UpdateOrderUseCase {
    constructor(){}

    async execute(data: UpdateOrderType){

        const orderUpdate = await prismaClient.order.update({
            where: {
                id: data.id,
            },
            data: {
                status: data.status,
            }
        });

        const kafkaSendMessage = new KafkaSendMessage();
        await kafkaSendMessage.execute("ORDER_STATUS", {
            customerId: orderUpdate.customerId,
            status: orderUpdate.status
        });

        return orderUpdate;
    }
}