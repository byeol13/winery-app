package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.ProducerDTO;
import com.be.winery_app.dto.RegionDTO;
import com.be.winery_app.entity.CountryEntity;
import com.be.winery_app.entity.ProducerEntity;
import com.be.winery_app.entity.RegionEntity;
import com.be.winery_app.mapper.Impl.ProducerMapperImpl;
import com.be.winery_app.repository.ProducerRepository;
import com.be.winery_app.repository.RegionRepository;
import com.be.winery_app.service.Interface.ProducerServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProducerServiceImpl implements ProducerServiceInterface {

    @Autowired
    private ProducerRepository repository;

    @Autowired
    private ProducerMapperImpl mapper;

    @Autowired
    private RegionRepository regionRepository;

    @Override
    public List<ProducerDTO> getAllProducerData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProducerDTO getProducerObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public ProducerDTO insertNewProducerObjectData(ProducerDTO body) {
        RegionEntity regionEntity = regionRepository.findById(body.getRegionDTO().getRegionId())
                .orElseThrow(() -> new EntityNotFoundException("Region not found"));

        ProducerEntity newProducerEntity = new ProducerEntity();
        newProducerEntity.setProducerName(body.getProducerName());
        newProducerEntity.setDetails(body.getDetails());
        newProducerEntity.setRegionEntity(regionEntity);

        ProducerEntity savedProducer = repository.save(newProducerEntity);

        return mapper.toDTO(savedProducer);
    }

    @Override
    public ProducerDTO updateExistingProducerObjectData(ProducerDTO body) {
        ProducerEntity existingProducerEntity = repository.findById(body.getProducerId())
                .orElseThrow(() -> new EntityNotFoundException("Producer not found"));

        RegionEntity regionEntity = regionRepository.findById(body.getRegionDTO().getRegionId())
                .orElseThrow(() -> new EntityNotFoundException("Region not found"));

        existingProducerEntity.setProducerName(body.getProducerName());
        existingProducerEntity.setDetails(body.getDetails());
        existingProducerEntity.setRegionEntity(regionEntity);

        ProducerEntity updatedProducer = repository.save(existingProducerEntity);
        return mapper.toDTO(updatedProducer);
    }

    @Override
    public ProducerDTO deleteProducerObjectData(Integer id) {
        ProducerDTO deleted = getProducerObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
