import { Router } from "express";
import { CreateProductController } from "../modules/controllers/create-product.controller";

const router = Router();

router.post('/products', (request, response) => {
    new CreateProductController().handle(request, response);
});

export { router };