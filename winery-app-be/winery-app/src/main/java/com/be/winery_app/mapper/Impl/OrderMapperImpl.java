package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.OrderDTO;
import com.be.winery_app.entity.OrderEntity;
import com.be.winery_app.mapper.Interface.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderMapperImpl implements OrderMapperInterface {

    @Autowired
    private SupplierMapperInterface supplierMapper;

    @Autowired
    private StoreMapperInterface storeMapper;

    @Autowired
    private EmployeeMapperInterface employeeMapper;

    @Override
    public OrderDTO toDTO(OrderEntity entity) {
        if (entity == null) return null;

        OrderDTO dto = new OrderDTO();
        dto.setOrderId(entity.getOrderId());
        dto.setOrderNumber(entity.getOrderNumber());
        dto.setExpectedDeliveryDate(entity.getExpectedDeliveryDate());
        dto.setTimePlaced(entity.getTimePlaced());
        dto.setTimeCanceled(entity.getTimeCanceled());
        dto.setTimeDelivered(entity.getTimeDelivered());
        dto.setOrderPrice(entity.getOrderPrice());
        dto.setSupplierDTO(supplierMapper.toDTO(entity.getSupplierEntity()));
        dto.setStoreDTO(storeMapper.toDTO(entity.getStoreEntity()));
        dto.setEmployeeDTO(employeeMapper.toDTO(entity.getEmployeeEntity()));

        return dto;
    }

    @Override
    public OrderEntity toEntity(OrderDTO dto) {
        if (dto == null) return null;

        OrderEntity entity = new OrderEntity();
        entity.setOrderId(dto.getOrderId());
        entity.setOrderNumber(dto.getOrderNumber());
        entity.setExpectedDeliveryDate(dto.getExpectedDeliveryDate());
        entity.setTimePlaced(dto.getTimePlaced());
        entity.setTimeCanceled(dto.getTimeCanceled());
        entity.setTimeDelivered(dto.getTimeDelivered());
        entity.setOrderPrice(dto.getOrderPrice());
        entity.setSupplierEntity(supplierMapper.toEntity(dto.getSupplierDTO()));
        entity.setStoreEntity(storeMapper.toEntity(dto.getStoreDTO()));
        entity.setEmployeeEntity(employeeMapper.toEntity(dto.getEmployeeDTO()));

        return entity;
    }
}
