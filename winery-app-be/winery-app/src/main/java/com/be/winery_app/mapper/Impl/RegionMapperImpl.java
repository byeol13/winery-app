package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.RegionDTO;
import com.be.winery_app.entity.RegionEntity;
import com.be.winery_app.mapper.Interface.CountryMapperInterface;
import com.be.winery_app.mapper.Interface.RegionMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RegionMapperImpl implements RegionMapperInterface {

    @Autowired
    private CountryMapperInterface countryMapper;

    @Override
    public RegionDTO toDTO(RegionEntity entity) {
        if (entity == null) return null;

        RegionDTO dto = new RegionDTO();
        dto.setRegionId(entity.getRegionId());
        dto.setRegionName(entity.getRegionName());
        dto.setCountryDTO(countryMapper.toDTO(entity.getCountryEntity()));

        return dto;
    }

    @Override
    public RegionEntity toEntity(RegionDTO dto) {
        if (dto == null) return null;

        RegionEntity entity = new RegionEntity();
        entity.setRegionId(dto.getRegionId());
        entity.setRegionName(dto.getRegionName());
        entity.setCountryEntity(countryMapper.toEntity(dto.getCountryDTO()));

        return entity;
    }
}
