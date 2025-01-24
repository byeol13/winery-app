package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.EmployeeDTO;
import com.be.winery_app.mapper.Impl.EmployeeMapperImpl;
import com.be.winery_app.repository.EmployeeRepository;
import com.be.winery_app.service.Interface.EmployeeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class EmployeeServiceImpl implements EmployeeServiceInterface {

    @Autowired
    private EmployeeRepository repository;

    @Autowired
    private EmployeeMapperImpl mapper;

    @Override
    public List<EmployeeDTO> getAllEmployeeData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO getEmployeeObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public EmployeeDTO insertNewEmployeeObjectData(EmployeeDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public EmployeeDTO updateExistingEmployeeObjectData(EmployeeDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public EmployeeDTO deleteEmployeeObjectData(Integer id) {
        EmployeeDTO deleted = getEmployeeObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
