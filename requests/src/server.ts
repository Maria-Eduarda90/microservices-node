import express from "express";
import "./providers/kafka/consumers"
import { router } from "./router/routes";

const PORT = process.env.PORT ?? 3002;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server client is running on PORT ${PORT}`));
