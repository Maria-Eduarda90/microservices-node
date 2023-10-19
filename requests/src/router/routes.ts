import { Router } from "express";
import { CreateOrderController } from "../modules/controllers/create-order.controller";
import { UpdateOrderController } from "../modules/update/update-order.controller";

const router = Router();

router.post('/orders', (request, response) => {
    new CreateOrderController().handle(request, response);
});

router.patch("/orders", (request, response) => {
  new UpdateOrderController().handle(request, response);
});

export { router }