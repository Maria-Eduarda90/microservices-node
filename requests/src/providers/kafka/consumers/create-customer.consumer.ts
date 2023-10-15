import { prismaClient } from "../../../config/prisma/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";
import { CustomerConsumerType } from "./@types/CustomerConsumerType";

export async function  createCustomerConsumer(){
    console.log('CUSTOMER CONSUMER');
    const consumer = await kafkaConsumer('CUSTOMER_CREATED');
    await consumer.run({
        eachMessage: async ({ message }) => {
            const messageToString = message.value!.toString();
            const customer = JSON.parse(messageToString) as CustomerConsumerType;
            
            await prismaClient.customer.create({
                data: {
                    externalId: customer.id,
                    email: customer.email,
                }
            });
        }
    });
}

createCustomerConsumer();