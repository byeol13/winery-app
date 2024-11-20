import { Bottle } from "./Bottle.model"
import { Store } from "./Store.model"

export interface Inventory {
  id: number
  store_id: Store,
  bottle_id: Bottle,
  quantity: number
}