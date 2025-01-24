package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.StoreDTO;
import com.be.winery_app.entity.StoreEntity;
import com.be.winery_app.mapper.Interface.CityMapperInterface;
import com.be.winery_app.mapper.Interface.StoreMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class StoreMapperImpl implements StoreMapperInterface {

    @Autowired
    private CityMapperInterface cityMapper;

    @Override
    public StoreDTO toDTO(StoreEntity entity) {
        if (entity == null) return null;

        StoreDTO dto = new StoreDTO();
        dto.setStoreId(entity.getStoreId());
        dto.setStoreName(entity.getStoreName());
        dto.setAddress(entity.getAddress());
        dto.setPhone(entity.getPhone());
        dto.setMobile(entity.getMobile());
        dto.setEmail(entity.getEmail());
        dto.setDetails(entity.getDetails());
        dto.setCityDTO(cityMapper.toDTO(entity.getCityEntity()));

        return dto;
    }

    @Override
    public StoreEntity toEntity(StoreDTO dto) {
        if (dto == null) return null;

        StoreEntity entity = new StoreEntity();
        entity.setStoreId(dto.getStoreId());
        entity.setStoreName(dto.getStoreName());
        entity.setAddress(dto.getAddress());
        entity.setPhone(dto.getPhone());
        entity.setMobile(dto.getMobile());
        entity.setEmail(dto.getEmail());
        entity.setDetails(dto.getDetails());
        entity.setCityEntity(cityMapper.toEntity(dto.getCityDTO()));

        return entity;
    }
}
