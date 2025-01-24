package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class InventoryDTO {
    private Integer inventoryId;
    private Integer quantity;
    private StoreDTO storeDTO;
    private BottleDTO bottleDTO;
}
