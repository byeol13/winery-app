export class OrderItem {
  orderItemId?: number;
  orderDTO: { orderId: number };
  bottleDTO: { bottleId: number};
  quantity: number;
  orderPrice: number;

  constructor(
    orderDTO: { orderId: number },
    bottleDTO: { bottleId: number},
    quantity: number,
    orderPrice: number,
    orderItemId?: number
  ){
    this.orderDTO = orderDTO;
    this.bottleDTO = bottleDTO;
    this.quantity = quantity;
    this.orderPrice = orderPrice;
    if (orderItemId) this.orderItemId = orderItemId;
  }
}
