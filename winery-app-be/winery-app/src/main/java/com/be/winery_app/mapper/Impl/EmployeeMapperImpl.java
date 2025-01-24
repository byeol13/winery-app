package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.EmployeeDTO;
import com.be.winery_app.entity.EmployeeEntity;
import com.be.winery_app.mapper.Interface.EmployeeMapperInterface;
import org.springframework.stereotype.Component;

@Component
public class EmployeeMapperImpl implements EmployeeMapperInterface {


    @Override
    public EmployeeDTO toDTO(EmployeeEntity entity) {
        if (entity == null) return null;

        EmployeeDTO dto = new EmployeeDTO();
        dto.setEmployeeId(entity.getEmployeeId());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        dto.setUsername(entity.getUsername());
        dto.setPassword(entity.getPassword());
        dto.setPhone(entity.getPhone());
        dto.setEmail(entity.getEmail());
        dto.setIsActive(entity.getIsActive());

        return dto;
    }

    @Override
    public EmployeeEntity toEntity(EmployeeDTO dto) {
        if (dto == null) return null;

        EmployeeEntity entity = new EmployeeEntity();
        entity.setEmployeeId(dto.getEmployeeId());
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setUsername(dto.getUsername());
        entity.setPassword(dto.getPassword());
        entity.setPhone(dto.getPhone());
        entity.setEmail(dto.getEmail());
        entity.setIsActive(dto.getIsActive());

        return entity;
    }
}
