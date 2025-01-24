package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.CategoryDTO;
import com.be.winery_app.entity.CategoryEntity;

public interface CategoryMapperInterface {

    CategoryDTO toDTO(CategoryEntity entity);
    CategoryEntity toEntity(CategoryDTO dto);
}
