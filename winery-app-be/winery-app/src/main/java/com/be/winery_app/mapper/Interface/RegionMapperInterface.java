package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.RegionDTO;
import com.be.winery_app.entity.RegionEntity;

import java.util.List;

public interface RegionMapperInterface {

    RegionDTO toDTO(RegionEntity entity);
    RegionEntity toEntity(RegionDTO dto);
}
