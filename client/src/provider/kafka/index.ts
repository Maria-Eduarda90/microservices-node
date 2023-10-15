import { Kafka } from "kafkajs";

const kafka = new Kafka({
  brokers: ["humble-seal-6082-us1-kafka.upstash.io:9092"],
  sasl: {
    mechanism: "scram-sha-256",
    username: `${process.env.USERNAME_KAFKA}`,
    password: `${process.env.PASSWORD_KAFKA}`,
  },
  ssl: true,
});

export { kafka }