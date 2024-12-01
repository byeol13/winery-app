import { Customer } from "./Customer.model"
import { CustomerOrder } from "./CustomerOrder.model"
import { Employee } from "./Employee.model"
import { Store } from "./Store.model"

export interface Invoice {
  id: number,
  invoice_number: string,
  store_id: Store,
  customer_order_id: CustomerOrder,
  customer_id: Customer,
  employee_id: Employee,
  invoice_total: number,
  time_created: Date
}