import { kafkaConsumer } from "../kafka.consumer";

export async function  createCustomerConsumer(){
    console.log('CUSTOMER CONSUMER');
    const consumer = await kafkaConsumer('CUSTOMER_CREATED');
    await consumer.run({
        eachMessage: async ({ message }) => {
            const messageToString = message.value?.toString();
            console.log(messageToString);
        }
    });
}

createCustomerConsumer();