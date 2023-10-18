import { prismaClient } from "../../../config/prisma/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";
import { ProductConsumerType } from "./@types/ProductConsumer";

export async function createProductConsumer() {
  console.log("CUSTOMER CONSUMER");
  const consumer = await kafkaConsumer("PRODUCT_CREATED");
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString();
      const product = JSON.parse(messageToString) as ProductConsumerType;

      await prismaClient.product.create({
        data: {
          externalId: product.id,
          code: product.code,
        },
      });
    },
  });
}

createProductConsumer();
