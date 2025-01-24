package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.CountryDTO;
import com.be.winery_app.entity.CountryEntity;
import com.be.winery_app.mapper.Interface.CountryMapperInterface;
import org.springframework.stereotype.Component;

@Component
public class CountryMapperImpl implements CountryMapperInterface {

    @Override
    public CountryDTO toDTO(CountryEntity entity) {
        if (entity == null) return null;

        CountryDTO dto = new CountryDTO();

        dto.setCountryId(entity.getCountryId());
        dto.setCountryName(entity.getCountryName());

        return dto;
    }

    @Override
    public CountryEntity toEntity(CountryDTO dto) {
        if (dto == null) return null;

        CountryEntity entity = new CountryEntity();

        entity.setCountryId(dto.getCountryId());
        entity.setCountryName(dto.getCountryName());

        return entity;
    }
}
