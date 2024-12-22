import { Employee } from "./Employee.model"
import { Store } from "./Store.model"
import { Supplier } from "./Supplier.model"

export interface Order {
  orderId: number,
  orderNumber: string,
  expectedDeliveryDate: Date,
  timePlaced: Date,
  timeCanceled: Date | null,
  timeDelivered: Date | null,
  supplierDTO: Supplier,
  storeDTO: Store,
  employeeDTO: Employee,
  orderPrice: number
}