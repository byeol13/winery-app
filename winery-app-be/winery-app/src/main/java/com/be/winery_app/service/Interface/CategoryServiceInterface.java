package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.CategoryDTO;

import java.util.List;

public interface CategoryServiceInterface {

    List<CategoryDTO> getAllCategoryData();
    CategoryDTO getCategoryObjectById(Integer id);
    CategoryDTO insertNewCategoryObjectData(CategoryDTO body);
    CategoryDTO updateExistingCategoryObjectData(CategoryDTO body);
    CategoryDTO deleteCategoryObjectData(Integer id);
}
