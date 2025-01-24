package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.RegionDTO;
import com.be.winery_app.dto.StoreDTO;
import com.be.winery_app.entity.CityEntity;
import com.be.winery_app.entity.CountryEntity;
import com.be.winery_app.entity.RegionEntity;
import com.be.winery_app.entity.StoreEntity;
import com.be.winery_app.mapper.Impl.StoreMapperImpl;
import com.be.winery_app.repository.CityRepository;
import com.be.winery_app.repository.StoreRepository;
import com.be.winery_app.service.Interface.StoreServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class StoreServiceImpl implements StoreServiceInterface {

    @Autowired
    private StoreRepository repository;

    @Autowired
    private StoreMapperImpl mapper;

    @Autowired
    private CityRepository cityRepository;

    @Override
    public List<StoreDTO> getAllStoreData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public StoreDTO getStoreObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public StoreDTO insertNewStoreObjectData(StoreDTO body) {
        CityEntity cityEntity = cityRepository.findById(body.getCityDTO().getCityId())
                .orElseThrow(() -> new EntityNotFoundException("City not found"));

        StoreEntity newStoreEntity = new StoreEntity();
        newStoreEntity.setStoreName(body.getStoreName());
        newStoreEntity.setAddress(body.getAddress());
        newStoreEntity.setPhone(body.getPhone());
        newStoreEntity.setMobile(body.getMobile());
        newStoreEntity.setEmail(body.getEmail());
        newStoreEntity.setDetails(body.getDetails());
        newStoreEntity.setCityEntity(cityEntity);

        StoreEntity savedStore = repository.save(newStoreEntity);

        return mapper.toDTO(savedStore);
    }

    @Override
    public StoreDTO updateExistingStoreObjectData(StoreDTO body) {
        StoreEntity existingStoreEntity = repository.findById(body.getStoreId())
                .orElseThrow(() -> new EntityNotFoundException("Store not found"));

        CityEntity cityEntity = cityRepository.findById(body.getCityDTO().getCityId())
                .orElseThrow(() -> new EntityNotFoundException("City not found"));

        existingStoreEntity.setStoreName(body.getStoreName());
        existingStoreEntity.setAddress(body.getAddress());
        existingStoreEntity.setPhone(body.getPhone());
        existingStoreEntity.setMobile(body.getMobile());
        existingStoreEntity.setEmail(body.getEmail());
        existingStoreEntity.setDetails(body.getDetails());
        existingStoreEntity.setCityEntity(cityEntity);

        StoreEntity updatedStore = repository.save(existingStoreEntity);
        return mapper.toDTO(updatedStore);
    }

    @Override
    public StoreDTO deleteStoreObjectData(Integer id) {
        StoreDTO deleted = getStoreObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
