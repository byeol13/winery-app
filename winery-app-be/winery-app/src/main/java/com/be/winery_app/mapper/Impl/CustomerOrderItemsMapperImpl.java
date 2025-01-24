package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.CustomerOrderItemsDTO;
import com.be.winery_app.entity.CustomerOrderItemsEntity;
import com.be.winery_app.mapper.Interface.BottleMapperInterface;
import com.be.winery_app.mapper.Interface.CustomerOrderItemsMapperInterface;
import com.be.winery_app.mapper.Interface.CustomerOrderMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CustomerOrderItemsMapperImpl implements CustomerOrderItemsMapperInterface {

    @Autowired
    private CustomerOrderMapperInterface customerOrderMapper;

    @Autowired
    private BottleMapperInterface bottleMapper;

    @Override
    public CustomerOrderItemsDTO toDTO(CustomerOrderItemsEntity entity) {
        if (entity == null) return null;

        CustomerOrderItemsDTO dto = new CustomerOrderItemsDTO();
        dto.setCustomerOrderItemId(entity.getCustomerOrderItemId());
        dto.setQuantity(entity.getQuantity());
        dto.setOrderPrice(entity.getOrderPrice());
        dto.setCustomerOrderDTO(customerOrderMapper.toDTO(entity.getCustomerOrderEntity()));
        dto.setBottleDTO(bottleMapper.toDTO(entity.getBottleEntity()));

        return dto;
    }

    @Override
    public CustomerOrderItemsEntity toEntity(CustomerOrderItemsDTO dto) {
        if (dto == null) return null;

        CustomerOrderItemsEntity entity = new CustomerOrderItemsEntity();
        entity.setCustomerOrderItemId(dto.getCustomerOrderItemId());
        entity.setQuantity(dto.getQuantity());
        entity.setOrderPrice(dto.getOrderPrice());
        entity.setCustomerOrderEntity(customerOrderMapper.toEntity(dto.getCustomerOrderDTO()));
        entity.setBottleEntity(bottleMapper.toEntity(dto.getBottleDTO()));

        return entity;
    }
}
