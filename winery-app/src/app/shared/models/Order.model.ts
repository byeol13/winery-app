import { Employee } from "./Employee.model"
import { Store } from "./Store.model"
import { Supplier } from "./Supplier.model"

export interface Order {
  id: number,
  order_number: string,
  expected_delivery_date: Date,
  time_placed: Date,
  time_canceled: Date | null,
  time_delivered: Date | null,
  supplier_id: Supplier,
  store_id: Store,
  employee_id: Employee,
  order_price: number
}