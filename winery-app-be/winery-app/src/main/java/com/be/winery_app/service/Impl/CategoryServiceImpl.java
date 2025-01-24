package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.BottleDTO;
import com.be.winery_app.dto.CategoryDTO;
import com.be.winery_app.entity.BottleEntity;
import com.be.winery_app.entity.CategoryEntity;
import com.be.winery_app.entity.ProducerEntity;
import com.be.winery_app.mapper.Impl.CategoryMapperImpl;
import com.be.winery_app.repository.CategoryRepository;
import com.be.winery_app.service.Interface.CategoryServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CategoryServiceImpl implements CategoryServiceInterface {

    @Autowired
    private CategoryRepository repository;

    @Autowired
    private CategoryMapperImpl mapper;

    @Override
    public List<CategoryDTO> getAllCategoryData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CategoryDTO getCategoryObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public CategoryDTO insertNewCategoryObjectData(CategoryDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public CategoryDTO updateExistingCategoryObjectData(CategoryDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }


    @Override
    public CategoryDTO deleteCategoryObjectData(Integer id) {
        CategoryDTO deleted = getCategoryObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
