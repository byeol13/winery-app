import { Customer } from "./Customer.model"
import { CustomerOrder } from "./CustomerOrder.model"
import { Employee } from "./Employee.model"
import { Store } from "./Store.model"

export interface Invoice {
  invoiceId: number,
  invoiceNumber: string,
  storeDTO: Store,
  customerOrderDTO: CustomerOrder,
  customerDTO: Customer,
  employeeDTO: Employee,
  invoiceTotal: number,
  timeCreated: Date
}