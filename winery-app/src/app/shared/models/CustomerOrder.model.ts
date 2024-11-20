import { Customer } from "./Customer.model"
import { Store } from "./Store.model"

export interface CustomerOrder {
  id: number,
  order_number: string,
  customer_id: Customer,
  store_id: Store,
  expected_delivery_date: string,
  time_placed: string,
  order_price: number
}