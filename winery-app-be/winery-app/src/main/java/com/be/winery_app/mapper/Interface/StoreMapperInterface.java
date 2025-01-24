package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.StoreDTO;
import com.be.winery_app.entity.StoreEntity;

public interface StoreMapperInterface {
    StoreDTO toDTO(StoreEntity entity);
    StoreEntity toEntity(StoreDTO dto);
}
