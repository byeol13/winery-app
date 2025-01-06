export class InvoiceItem {
  invoiceItemId?: number;
  invoiceDTO: { invoiceId: number };
  bottleDTO: { bottleId: number };
  quantity: number;
  itemPrice: number;

  constructor(
    invoiceDTO: { invoiceId: number },
    bottleDTO: { bottleId: number },
    quantity: number,
    itemPrice: number,
    invoiceItemId?: number
  ){
    this.invoiceDTO = invoiceDTO;
    this.bottleDTO = bottleDTO;
    this.quantity = quantity;
    this.itemPrice = itemPrice;
    if (invoiceItemId) this.invoiceItemId = invoiceItemId;
  }
}