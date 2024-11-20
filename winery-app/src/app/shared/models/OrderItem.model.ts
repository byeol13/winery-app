import { Bottle } from "./Bottle.model"
import { Order } from "./Order.model"

export interface OrderItem {
  id: number,
  order_id: Order,
  bottle_id: Bottle,
  quantity: number,
  order_price: number
}