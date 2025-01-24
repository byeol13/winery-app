package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.BottleDTO;
import com.be.winery_app.entity.BottleEntity;

public interface BottleMapperInterface {

    BottleDTO toDTO(BottleEntity entity);
    BottleEntity toEntity(BottleDTO dto);
}
