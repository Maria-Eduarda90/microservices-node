import Client from "App/Models/Client";
import KafkaSendMessage from "Providers/KafkaProvider";

export default class CreateClientServices {
  constructor(private kafkaProducer: KafkaSendMessage) {}
  
  public async customerRegister(data: CreateClientRequestType) {
    try {
      const email = await Client.findBy('email', data.email)

      if (email) throw new Error('Esse email já existe').message
    } catch (err) {
      throw err
    }

    const customerUser = await Client.create({
      ...data,
    })

    // const kafkaProducer = new KafkaSendMessage();
    // await kafkaProducer.execute('CUSTOMER_CREATED', customerUser)
    // console.log('kafkaProducer: ', kafkaProducer)

    try {
      this.kafkaProducer.register('CUSTOMER_CREATED', customerUser)
    } catch (err) { 
      console.log('error: ', err) 
    }

    return customerUser
  }
}