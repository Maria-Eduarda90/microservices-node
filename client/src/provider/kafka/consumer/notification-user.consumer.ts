import { kafkaConsumer } from "../kafka.consumer";
import { CustomerConsumerType } from "./@types/CustomerConsumerType";

export async function createCustomerConsumer() {
  console.log("CUSTOMER CONSUMER");
  const consumer = await kafkaConsumer("ORDER_STATUS");
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString();
      const statusCustomer = JSON.parse(messageToString) as CustomerConsumerType;

      console.log(`ATUALIZAÇÃO DE STATUS - Client ${statusCustomer.customerId} - Status ${statusCustomer.status}`)
    },
  });
}

createCustomerConsumer();
