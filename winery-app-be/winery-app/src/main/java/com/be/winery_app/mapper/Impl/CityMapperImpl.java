package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.CityDTO;
import com.be.winery_app.entity.CityEntity;
import com.be.winery_app.mapper.Interface.CityMapperInterface;
import com.be.winery_app.mapper.Interface.CountryMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CityMapperImpl implements CityMapperInterface {

    @Autowired
    private CountryMapperInterface countryMapper;

    @Override
    public CityDTO toDTO(CityEntity entity) {
        if (entity == null) return null;

        CityDTO dto = new CityDTO();
        dto.setCityId(entity.getCityId());
        dto.setPostalCode(entity.getPostalCode());
        dto.setCityName(entity.getCityName());
        dto.setCountryDTO(countryMapper.toDTO(entity.getCountryEntity()));

        return dto;
    }

    @Override
    public CityEntity toEntity(CityDTO dto) {
        if (dto == null) return null;

        CityEntity entity = new CityEntity();
        entity.setCityId(dto.getCityId());
        entity.setPostalCode(dto.getPostalCode());
        entity.setCityName(dto.getCityName());
        entity.setCountryEntity(countryMapper.toEntity(dto.getCountryDTO()));

        return entity;
    }
}
