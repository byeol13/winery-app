import { Bottle } from "./Bottle.model"
import { Order } from "./Order.model"

export interface OrderItem {
  orderItemId: number,
  orderDTO: Order,
  bottleDTO: Bottle,
  quantity: number,
  orderPrice: number
}