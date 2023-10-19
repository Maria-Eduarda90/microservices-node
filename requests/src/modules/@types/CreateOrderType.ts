export type CreateOrderType = {
  customerId: string;
  items: [
    {
      productId: string;
      quantity: number;
    }
  ];
};