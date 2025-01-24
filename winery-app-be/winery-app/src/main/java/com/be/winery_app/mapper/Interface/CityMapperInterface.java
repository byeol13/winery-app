package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.CityDTO;
import com.be.winery_app.entity.CityEntity;

public interface CityMapperInterface {

    CityDTO toDTO(CityEntity entity);
    CityEntity toEntity(CityDTO dto);
}
