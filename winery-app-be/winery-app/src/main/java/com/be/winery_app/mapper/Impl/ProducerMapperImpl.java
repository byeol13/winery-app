package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.ProducerDTO;
import com.be.winery_app.entity.ProducerEntity;
import com.be.winery_app.mapper.Interface.ProducerMapperInterface;
import com.be.winery_app.mapper.Interface.RegionMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProducerMapperImpl implements ProducerMapperInterface{

    @Autowired
    private RegionMapperInterface regionMapper;

    @Override
    public ProducerDTO toDTO(ProducerEntity entity) {
        if (entity == null) return null;

        ProducerDTO dto = new ProducerDTO();
        dto.setProducerId(entity.getProducerId());
        dto.setProducerName(entity.getProducerName());
        dto.setDetails(entity.getDetails());
        dto.setRegionDTO(regionMapper.toDTO(entity.getRegionEntity()));

        return dto;
    }

    @Override
    public ProducerEntity toEntity(ProducerDTO dto) {
        if (dto == null) return null;

        ProducerEntity entity = new ProducerEntity();
        entity.setProducerId(dto.getProducerId());
        entity.setProducerName(dto.getProducerName());
        entity.setDetails(dto.getDetails());
        entity.setRegionEntity(regionMapper.toEntity(dto.getRegionDTO()));

        return entity;
    }
}
