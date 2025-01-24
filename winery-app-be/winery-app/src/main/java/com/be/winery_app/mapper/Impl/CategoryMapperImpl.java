package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.CategoryDTO;
import com.be.winery_app.entity.CategoryEntity;
import com.be.winery_app.mapper.Interface.CategoryMapperInterface;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapperImpl implements CategoryMapperInterface {

    @Override
    public CategoryDTO toDTO(CategoryEntity entity) {
        if (entity == null) return null;

        CategoryDTO dto = new CategoryDTO();
        dto.setCategoryId(entity.getCategoryId());
        dto.setCategoryName(entity.getCategoryName());

        return dto;
    }

    @Override
    public CategoryEntity toEntity(CategoryDTO dto) {
        if (dto == null) return null;

        CategoryEntity entity = new CategoryEntity();
        entity.setCategoryId(dto.getCategoryId());
        entity.setCategoryName(dto.getCategoryName());

        return entity;
    }
}
