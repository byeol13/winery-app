export class Invoice {
  invoiceId?: number;
  invoiceNumber: string;
  storeDTO: { storeId: number };
  customerOrderDTO: { customerOrderId: number };
  customerDTO: { customerId: number };
  employeeDTO: { employeeId: number };
  invoiceTotal: number;
  timeCreated: Date;

  constructor(
    invoiceNumber: string,
    storeDTO: { storeId: number },
    customerOrderDTO: { customerOrderId: number },
    customerDTO: { customerId: number },
    employeeDTO: { employeeId: number },
    invoiceTotal: number,
    timeCreated: Date,
    invoiceId?: number
  ) {
    this.invoiceNumber = invoiceNumber;
    this.storeDTO = storeDTO;
    this.customerOrderDTO = customerOrderDTO;
    this.customerDTO = customerDTO;
    this.employeeDTO = employeeDTO;
    this.invoiceTotal = invoiceTotal;
    this.timeCreated = timeCreated;
    if (invoiceId) this.invoiceId = invoiceId;
  }
}
