package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.BottleDTO;
import com.be.winery_app.entity.BottleEntity;
import com.be.winery_app.mapper.Interface.BottleMapperInterface;
import com.be.winery_app.mapper.Interface.CategoryMapperInterface;
import com.be.winery_app.mapper.Interface.ProducerMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BottleMapperImpl implements BottleMapperInterface {

    @Autowired
    private CategoryMapperInterface categoryMapper;

    @Autowired
    private ProducerMapperInterface producerMapper;

    @Override
    public BottleDTO toDTO(BottleEntity entity) {
        if (entity == null) return null;

        BottleDTO dto = new BottleDTO();
        dto.setBottleId(entity.getBottleId());
        dto.setFullName(entity.getFullName());
        dto.setLabel(entity.getLabel());
        dto.setVolume(entity.getVolume());
        dto.setYearProduced(entity.getYearProduced());
        dto.setPicture(entity.getPicture());
        dto.setAlcoholPercentage(entity.getAlcoholPercentage());
        dto.setCurrentPrice(entity.getCurrentPrice());
        dto.setCategoryDTO(categoryMapper.toDTO(entity.getCategoryEntity()));
        dto.setProducerDTO(producerMapper.toDTO(entity.getProducerEntity()));

        return dto;
    }

    @Override
    public BottleEntity toEntity(BottleDTO dto) {
        if (dto == null) return null;

        BottleEntity entity = new BottleEntity();
        entity.setBottleId(dto.getBottleId());
        entity.setFullName(dto.getFullName());
        entity.setLabel(dto.getLabel());
        entity.setVolume(dto.getVolume());
        entity.setYearProduced(dto.getYearProduced());
        entity.setPicture(dto.getPicture());
        entity.setAlcoholPercentage(dto.getAlcoholPercentage());
        entity.setCurrentPrice(dto.getCurrentPrice());
        entity.setCategoryEntity(categoryMapper.toEntity(dto.getCategoryDTO()));
        entity.setProducerEntity(producerMapper.toEntity(dto.getProducerDTO()));

        return entity;
    }
}
