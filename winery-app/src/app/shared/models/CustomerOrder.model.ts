import { Customer } from "./Customer.model"
import { Store } from "./Store.model"

export interface CustomerOrder {
  customerOrderId: number,
  orderNumber: string,
  customerDTO: Customer,
  storeDTO: Store,
  expectedDeliveryDate: string,
  timePlaced: string,
  orderPrice: number
}