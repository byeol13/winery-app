package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.CustomerDTO;
import com.be.winery_app.entity.CustomerEntity;
import com.be.winery_app.mapper.Interface.CustomerMapperInterface;
import org.springframework.stereotype.Component;

@Component
public class CustomerMapperImpl implements CustomerMapperInterface {

    @Override
    public CustomerDTO toDTO(CustomerEntity entity) {
        if (entity == null) return null;

        CustomerDTO dto = new CustomerDTO();
        dto.setCustomerId(entity.getCustomerId());
        dto.setUsername(entity.getUsername());
        dto.setPassword(entity.getPassword());
        dto.setCustomerName(entity.getCustomerName());
        dto.setAddress(entity.getAddress());
        dto.setPhone(entity.getPhone());
        dto.setEmail(entity.getEmail());

        return dto;
    }

    @Override
    public CustomerEntity toEntity(CustomerDTO dto) {
        if (dto == null) return null;

        CustomerEntity entity = new CustomerEntity();
        entity.setCustomerId(dto.getCustomerId());
        entity.setUsername(dto.getUsername());
        entity.setPassword(dto.getPassword());
        entity.setCustomerName(dto.getCustomerName());
        entity.setAddress(dto.getAddress());
        entity.setPhone(dto.getPhone());
        entity.setEmail(dto.getEmail());

        return entity;
    }
}
