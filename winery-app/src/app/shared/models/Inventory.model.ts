import { Bottle } from "./Bottle.model"
import { Store } from "./Store.model"

export interface Inventory {
  inventoryId: number
  storeDTO: Store,
  bottleDTO: Bottle,
  quantity: number
}