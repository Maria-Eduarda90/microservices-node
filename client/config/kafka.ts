import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  brokers: ['actual-pig-6899-eu1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'YWN0dWFsLXBpZy02ODk5JP9l5eMDM38g-LxRA0JvmTxc3kCSq59sClu7eGJCs3I',
    password: 'ZTZjMzI3YjctYTFhMS00ODUwLWFjZGQtYzM4N2Y0OTU5NTE2',
  },
  ssl: true,
})

export { kafka }
