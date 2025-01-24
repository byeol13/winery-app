package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.SupplierDTO;
import com.be.winery_app.mapper.Impl.SupplierMapperImpl;
import com.be.winery_app.repository.SupplierRepository;
import com.be.winery_app.service.Interface.SupplierServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SupplierServiceImpl implements SupplierServiceInterface {

    @Autowired
    private SupplierRepository repository;

    @Autowired
    private SupplierMapperImpl mapper;

    @Override
    public List<SupplierDTO> getAllSupplierData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public SupplierDTO getSupplierObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public SupplierDTO insertNewSupplierObjectData(SupplierDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public SupplierDTO updateExistingSupplierObjectData(SupplierDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public SupplierDTO deleteSupplierObjectData(Integer id) {
        SupplierDTO deleted = getSupplierObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
