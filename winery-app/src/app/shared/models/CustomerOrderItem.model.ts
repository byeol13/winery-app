export class CustomerOrderItem {
  customerOrderItemId?: number;
  customerOrderDTO: { customerOrderId: number};
  bottleDTO: { bottleId: number };
  quantity: number;
  orderPrice: number;

  constructor(
    customerOrderDTO: { customerOrderId: number},
    bottleDTO: { bottleId: number },
    quantity: number,
    orderPrice: number,
    customerOrderItemId?: number
  ){
    this.customerOrderDTO = customerOrderDTO;
    this.bottleDTO = bottleDTO;
    this.quantity = quantity;
    this.orderPrice = orderPrice;
    if (customerOrderItemId) this.customerOrderItemId = customerOrderItemId;
  }
}