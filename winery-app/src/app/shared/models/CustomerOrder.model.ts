export class CustomerOrder {
  customerOrderId?: number;
  orderNumber: string;
  customerDTO: { customerId: number};
  storeDTO: { storeId: number };
  expectedDeliveryDate: string;
  timePlaced: string;
  orderPrice: number;

  constructor(
    orderNumber: string,
    customerDTO: { customerId: number},
    storeDTO: { storeId: number },
    expectedDeliveryDate: string,
    timePlaced: string,
    orderPrice: number,
    customerOrderId?: number
  ){
    this.orderNumber = orderNumber;
    this.customerDTO = customerDTO;
    this.storeDTO = storeDTO;
    this.expectedDeliveryDate = expectedDeliveryDate;
    this.timePlaced = timePlaced;
    this.orderPrice = orderPrice;
    if (customerOrderId) this.customerOrderId = customerOrderId;
  }
}