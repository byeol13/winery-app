import { Bottle } from "./Bottle.model"
import { Invoice } from "./Invoice.model"

export interface InvoiceItem {
  id: number,
  invoice_id: Invoice,
  bottle_id: Bottle,
  quantity: number,
  item_price: number
}