import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { kafka } from 'Config/kafka';
import { Kafka } from 'kafkajs'

export default class KafkaSendMessage {
  constructor(protected app: ApplicationContract) {}

  public async register(topic: string, payload: any): Promise<void> {
      const producer = kafka.producer({
        allowAutoTopicCreation: true,
      })

      console.log('producer: ', producer)

      producer.connect()
      console.log(`MESSAGE SENT TO TOPIC ${topic}`)
      console.log(payload)
      producer.send({
        topic,
        messages: [
          {
            value: JSON.stringify(payload),
          },
        ],
      })

      producer.disconnect()
    
  }
}
