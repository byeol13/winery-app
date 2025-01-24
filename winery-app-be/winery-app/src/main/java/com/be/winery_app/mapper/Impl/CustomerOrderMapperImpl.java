package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.CustomerOrderDTO;
import com.be.winery_app.entity.CustomerOrderEntity;
import com.be.winery_app.mapper.Interface.CustomerMapperInterface;
import com.be.winery_app.mapper.Interface.CustomerOrderMapperInterface;
import com.be.winery_app.mapper.Interface.StoreMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CustomerOrderMapperImpl implements CustomerOrderMapperInterface {

    @Autowired
    private CustomerMapperInterface customerMapper;

    @Autowired
    private StoreMapperInterface storeMapper;

    @Override
    public CustomerOrderDTO toDTO(CustomerOrderEntity entity) {
        if (entity == null) return null;

        CustomerOrderDTO dto = new CustomerOrderDTO();
        dto.setCustomerOrderId(entity.getCustomerOrderId());
        dto.setOrderNumber(entity.getOrderNumber());
        dto.setExpectedDeliveryDate(entity.getExpectedDeliveryDate());
        dto.setTimePlaced(entity.getTimePlaced());
        dto.setOrderPrice(entity.getOrderPrice());
        dto.setCustomerDTO(customerMapper.toDTO(entity.getCustomerEntity()));
        dto.setStoreDTO(storeMapper.toDTO(entity.getStoreEntity()));

        return dto;
    }

    @Override
    public CustomerOrderEntity toEntity(CustomerOrderDTO dto) {
        if (dto == null) return null;

        CustomerOrderEntity entity = new CustomerOrderEntity();
        entity.setCustomerOrderId(dto.getCustomerOrderId());
        entity.setOrderNumber(dto.getOrderNumber());
        entity.setExpectedDeliveryDate(dto.getExpectedDeliveryDate());
        entity.setTimePlaced(dto.getTimePlaced());
        entity.setOrderPrice(dto.getOrderPrice());
        entity.setCustomerEntity(customerMapper.toEntity(dto.getCustomerDTO()));
        entity.setStoreEntity(storeMapper.toEntity(dto.getStoreDTO()));

        return entity;
    }
}
