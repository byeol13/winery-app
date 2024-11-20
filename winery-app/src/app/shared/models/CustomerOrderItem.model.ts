import { Bottle } from "./Bottle.model"
import { CustomerOrder } from "./CustomerOrder.model"

export interface CustomerOrderItem {
  id: number,
  customer_order_id: CustomerOrder,
  bottle_id: Bottle,
  quantity: number,
  order_price: number
}