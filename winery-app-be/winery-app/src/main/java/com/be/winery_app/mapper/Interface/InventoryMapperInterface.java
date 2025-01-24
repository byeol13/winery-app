package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.InventoryDTO;
import com.be.winery_app.entity.InventoryEntity;

public interface InventoryMapperInterface {

    InventoryDTO toDTO(InventoryEntity entity);
    InventoryEntity toEntity(InventoryDTO dto);
}
