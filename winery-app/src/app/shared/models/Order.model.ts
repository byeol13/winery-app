export class Order {
  orderId?: number;
  orderNumber: string;
  expectedDeliveryDate: Date;
  timePlaced: Date;
  timeCanceled: Date | null;
  timeDelivered: Date | null;
  supplierDTO: { supplierId: number };
  storeDTO: { storeId: number };
  employeeDTO: { employeeId: number };
  orderPrice: number;

  constructor(
    orderNumber: string,
    expectedDeliveryDate: Date,
    timePlaced: Date,
    supplierDTO: { supplierId: number },
    storeDTO: { storeId: number },
    employeeDTO: { employeeId: number },
    orderPrice: number,
    timeCanceled: Date | null = null,
    timeDelivered: Date | null = null,
    orderId?: number
  ) {
    this.orderNumber = orderNumber;
    this.expectedDeliveryDate = expectedDeliveryDate;
    this.timePlaced = timePlaced;
    this.supplierDTO = supplierDTO;
    this.storeDTO = storeDTO;
    this.employeeDTO = employeeDTO;
    this.orderPrice = orderPrice;
    this.timeCanceled = timeCanceled;
    this.timeDelivered = timeDelivered;
    if (orderId) this.orderId = orderId;
  }
}
