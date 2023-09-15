import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { kafka } from 'Config/kafka';
import { Kafka } from 'kafkajs'

export default class KafkaProvider {
  constructor(protected app: Kafka) {}

  public async register(topic: string, payload: any): Promise<void> {
      const producer = kafka.producer()

      console.log('producer: ', producer)

      await producer.connect()
      console.log(`MESSAGE SENT TO TOPIC ${topic}`)
      console.log(payload)
      await producer.send({
        topic,
        messages: [
          {
            value: JSON.stringify(payload),
          },
        ],
      })

      await producer.disconnect()
    
  }
}
