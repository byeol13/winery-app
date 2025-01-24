package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.InventoryDTO;

import java.util.List;

public interface InventoryServiceInterface {

    List<InventoryDTO> getAllInventoryData();
    InventoryDTO getInventoryObjectById(Integer id);
    InventoryDTO insertNewInventoryObjectData(InventoryDTO body);
    InventoryDTO updateExistingInventoryObjectData(InventoryDTO body);
    InventoryDTO deleteInventoryObjectData(Integer id);

}
