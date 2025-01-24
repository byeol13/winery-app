package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.BottleDTO;
import com.be.winery_app.entity.BottleEntity;
import com.be.winery_app.entity.CategoryEntity;
import com.be.winery_app.entity.ProducerEntity;
import com.be.winery_app.mapper.Impl.BottleMapperImpl;
import com.be.winery_app.repository.BottleRepository;
import com.be.winery_app.repository.CategoryRepository;
import com.be.winery_app.repository.ProducerRepository;
import com.be.winery_app.service.Interface.BottleServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class BottleServiceImpl implements BottleServiceInterface {

    @Autowired
    private BottleRepository repository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProducerRepository producerRepository;

    @Autowired
    private BottleMapperImpl mapper;

    @Override
    public List<BottleDTO> getAllBottleData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BottleDTO getBottleObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public BottleDTO insertNewBottleObjectData(BottleDTO body) {
        CategoryEntity categoryEntity = categoryRepository.findById(body.getCategoryDTO().getCategoryId())
                .orElseThrow(() -> new EntityNotFoundException("Category not found"));

        ProducerEntity producerEntity = producerRepository.findById(body.getProducerDTO().getProducerId())
                .orElseThrow(() -> new EntityNotFoundException("Producer not found"));

        BottleEntity newBottleEntity = new BottleEntity();
        newBottleEntity.setFullName(body.getFullName());
        newBottleEntity.setLabel(body.getLabel());
        newBottleEntity.setVolume(body.getVolume());
        newBottleEntity.setYearProduced(body.getYearProduced());
        newBottleEntity.setPicture(body.getPicture());
        newBottleEntity.setAlcoholPercentage(body.getAlcoholPercentage());
        newBottleEntity.setCurrentPrice(body.getCurrentPrice());
        newBottleEntity.setCategoryEntity(categoryEntity);
        newBottleEntity.setProducerEntity(producerEntity);

        BottleEntity savedBottle = repository.save(newBottleEntity);

        return mapper.toDTO(savedBottle);
    }

    @Override
    public BottleDTO updateExistingBottleObjectData(BottleDTO body) {
        BottleEntity existingBottleEntity = repository.findById(body.getBottleId())
                .orElseThrow(() -> new EntityNotFoundException("Bottle not found"));

        CategoryEntity categoryEntity = categoryRepository.findById(body.getCategoryDTO().getCategoryId())
                .orElseThrow(() -> new EntityNotFoundException("Category not found"));

        ProducerEntity producerEntity = producerRepository.findById(body.getProducerDTO().getProducerId())
                .orElseThrow(() -> new EntityNotFoundException("Producer not found"));

        existingBottleEntity.setFullName(body.getFullName());
        existingBottleEntity.setLabel(body.getLabel());
        existingBottleEntity.setVolume(body.getVolume());
        existingBottleEntity.setYearProduced(body.getYearProduced());
        existingBottleEntity.setPicture(body.getPicture());
        existingBottleEntity.setAlcoholPercentage(body.getAlcoholPercentage());
        existingBottleEntity.setCurrentPrice(body.getCurrentPrice());
        existingBottleEntity.setCategoryEntity(categoryEntity);
        existingBottleEntity.setProducerEntity(producerEntity);

        BottleEntity updatedBottle = repository.save(existingBottleEntity);
        return mapper.toDTO(updatedBottle);
    }


    @Override
    public BottleDTO deleteBottleObjectData(Integer id) {
        BottleDTO deleted = getBottleObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
