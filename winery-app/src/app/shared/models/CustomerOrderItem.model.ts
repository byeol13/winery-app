import { Bottle } from "./Bottle.model"
import { CustomerOrder } from "./CustomerOrder.model"

export interface CustomerOrderItem {
  customerOrderItemId: number,
  customerOrderDTO: CustomerOrder,
  bottleDTO: Bottle,
  quantity: number,
  orderPrice: number
}