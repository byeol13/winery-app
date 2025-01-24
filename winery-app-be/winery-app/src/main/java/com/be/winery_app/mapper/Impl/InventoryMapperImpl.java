package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.InventoryDTO;
import com.be.winery_app.entity.InventoryEntity;
import com.be.winery_app.mapper.Interface.BottleMapperInterface;
import com.be.winery_app.mapper.Interface.InventoryMapperInterface;
import com.be.winery_app.mapper.Interface.StoreMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class InventoryMapperImpl implements InventoryMapperInterface {

    @Autowired
    private StoreMapperInterface storeMapper;

    @Autowired
    private BottleMapperInterface bottleMapper;

    @Override
    public InventoryDTO toDTO(InventoryEntity entity) {
        if (entity == null) return null;

        InventoryDTO dto = new InventoryDTO();
        dto.setInventoryId(entity.getInventoryId());
        dto.setQuantity(entity.getQuantity());
        dto.setStoreDTO(storeMapper.toDTO(entity.getStoreEntity()));
        dto.setBottleDTO(bottleMapper.toDTO(entity.getBottleEntity()));

        return dto;
    }

    @Override
    public InventoryEntity toEntity(InventoryDTO dto) {
        if (dto == null) return null;

        InventoryEntity entity = new InventoryEntity();
        entity.setInventoryId(dto.getInventoryId());
        entity.setQuantity(dto.getQuantity());
        entity.setStoreEntity(storeMapper.toEntity(dto.getStoreDTO()));
        entity.setBottleEntity(bottleMapper.toEntity(dto.getBottleDTO()));

        return entity;
    }
}
