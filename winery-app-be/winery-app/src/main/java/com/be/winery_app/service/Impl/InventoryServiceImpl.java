package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.InventoryDTO;
import com.be.winery_app.dto.StoreDTO;
import com.be.winery_app.entity.BottleEntity;
import com.be.winery_app.entity.CityEntity;
import com.be.winery_app.entity.InventoryEntity;
import com.be.winery_app.entity.StoreEntity;
import com.be.winery_app.mapper.Impl.InventoryMapperImpl;
import com.be.winery_app.repository.BottleRepository;
import com.be.winery_app.repository.InventoryRepository;
import com.be.winery_app.repository.StoreRepository;
import com.be.winery_app.service.Interface.InventoryServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class InventoryServiceImpl implements InventoryServiceInterface {

    @Autowired
    private InventoryRepository repository;

    @Autowired
    private InventoryMapperImpl mapper;

    @Autowired
    private StoreRepository storeRepository;

    @Autowired
    private BottleRepository bottleRepository;

    @Override
    public List<InventoryDTO> getAllInventoryData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public InventoryDTO getInventoryObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public InventoryDTO insertNewInventoryObjectData(InventoryDTO body) {
        StoreEntity storeEntity = storeRepository.findById(body.getStoreDTO().getStoreId())
                .orElseThrow(() -> new EntityNotFoundException("Store not found"));

        BottleEntity bottleEntity = bottleRepository.findById(body.getBottleDTO().getBottleId())
                .orElseThrow(() -> new EntityNotFoundException("Bottle not found"));

        InventoryEntity newInventoryEntity = new InventoryEntity();
        newInventoryEntity.setQuantity(body.getQuantity());
        newInventoryEntity.setStoreEntity(storeEntity);
        newInventoryEntity.setBottleEntity(bottleEntity);

        InventoryEntity savedInventory = repository.save(newInventoryEntity);

        return mapper.toDTO(savedInventory);
    }

    @Override
    public InventoryDTO updateExistingInventoryObjectData(InventoryDTO body) {
        InventoryEntity existingInventoryEntity = repository.findById(body.getInventoryId())
                .orElseThrow(() -> new EntityNotFoundException("Inventory not found"));

        StoreEntity storeEntity = storeRepository.findById(body.getStoreDTO().getStoreId())
                .orElseThrow(() -> new EntityNotFoundException("Store not found"));

        BottleEntity bottleEntity = bottleRepository.findById(body.getBottleDTO().getBottleId())
                .orElseThrow(() -> new EntityNotFoundException("Bottle not found"));

        existingInventoryEntity.setQuantity(body.getQuantity());
        existingInventoryEntity.setStoreEntity(storeEntity);
        existingInventoryEntity.setBottleEntity(bottleEntity);

        InventoryEntity updatedInventory = repository.save(existingInventoryEntity);
        return mapper.toDTO(updatedInventory);
    }

    @Override
    public InventoryDTO deleteInventoryObjectData(Integer id) {
        InventoryDTO deleted = getInventoryObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
