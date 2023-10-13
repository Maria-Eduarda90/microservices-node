import { Router } from "express";
import { CreateClientController } from "../modules/controllers/create-client.controller";

const router = Router();

router.post('/customer', (request, response) => {
    new CreateClientController().handle(request, response);
});

export { router };