package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.CountryDTO;
import com.be.winery_app.entity.CountryEntity;

import java.util.List;

public interface CountryMapperInterface {

    CountryDTO toDTO(CountryEntity entity);
    CountryEntity toEntity(CountryDTO dto);
}
