import express from 'express';
import { router } from './router/routes';
import "./provider/kafka/consumer"

const PORT = process.env.PORT ?? 3001;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server client is running on PORT ${PORT}`));