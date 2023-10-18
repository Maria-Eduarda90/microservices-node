import { prismaClient } from "../../config/prisma/prismaClient";
import { CreateProductType } from "../@types/CreateProductType";

export class CreateProductUseCase {
  
  constructor() {}

  async execute(data: CreateProductType){
    const productCode = await prismaClient.product.findFirst({
      where: {
        code: data.code,
      }
    });

    if(productCode) throw new Error("Esse codigo já existe").message;

    const product = await prismaClient.product.create({
      data: {
        ...data
      }
    });

    return product;
  }
}