export class Inventory {
  inventoryId?: number;
  storeDTO: { storeId: number };
  bottleDTO: { bottleId: number };
  quantity: number;

  constructor(
    storeDTO: { storeId: number },
    bottleDTO: { bottleId: number },
    quantity: number,
    inventoryId?: number
  ) {
    this.storeDTO = storeDTO;
    this.bottleDTO = bottleDTO;
    this.quantity = quantity;
    if (inventoryId) this.inventoryId = inventoryId;
  }
}
