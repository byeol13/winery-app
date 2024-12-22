import { Bottle } from "./Bottle.model"
import { Invoice } from "./Invoice.model"

export interface InvoiceItem {
  invoiceItemId: number,
  invoiceDTO: Invoice,
  bottleDTO: Bottle,
  quantity: number,
  itemPrice: number
}