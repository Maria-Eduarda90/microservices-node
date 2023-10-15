import { Kafka } from "kafkajs";

const kafka = new Kafka({
  brokers: ["humble-seal-6082-us1-kafka.upstash.io:9092"],
  sasl: {
    mechanism: "scram-sha-256",
    username: "aHVtYmxlLXNlYWwtNjA4MiSdL5LzlAxhaX-me0gRnBqiST6rHd5DVWAwdD41vTA",
    password: "Yzc5ZDg5ZTMtZDliYS00NzdkLTg1MzUtOTQ4MmNjNWVlZWI5",
  },
  ssl: true,
});

export { kafka };
