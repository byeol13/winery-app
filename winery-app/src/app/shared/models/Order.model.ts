import { Employee } from "./Employee.model"
import { Store } from "./Store.model"
import { Supplier } from "./Supplier.model"

export interface Order {
  id: number,
  order_number: string,
  expected_delivery_date: string,
  time_placed: string,
  time_canceled: string | null,
  time_delivered: string | null,
  supplier_id: Supplier,
  store_id: Store,
  employee_id: Employee,
  order_price: number
}