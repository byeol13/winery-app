package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.OrderItemDTO;
import com.be.winery_app.entity.OrderItemEntity;
import com.be.winery_app.mapper.Interface.BottleMapperInterface;
import com.be.winery_app.mapper.Interface.OrderItemMapperInterface;
import com.be.winery_app.mapper.Interface.OrderMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderItemMapperImpl implements OrderItemMapperInterface {

    @Autowired
    private OrderMapperInterface orderMapper;

    @Autowired
    private BottleMapperInterface bottleMapper;

    @Override
    public OrderItemDTO toDTO(OrderItemEntity entity) {
        if (entity == null) return null;

        OrderItemDTO dto = new OrderItemDTO();
        dto.setOrderItemId(entity.getOrderItemId());
        dto.setQuantity(entity.getQuantity());
        dto.setOrderPrice(entity.getOrderPrice());
        dto.setOrderDTO(orderMapper.toDTO(entity.getOrderEntity()));
        dto.setBottleDTO(bottleMapper.toDTO(entity.getBottleEntity()));

        return dto;
    }

    @Override
    public OrderItemEntity toEntity(OrderItemDTO dto) {
        if (dto == null) return null;

        OrderItemEntity entity = new OrderItemEntity();
        entity.setOrderItemId(dto.getOrderItemId());
        entity.setQuantity(dto.getQuantity());
        entity.setOrderPrice(dto.getOrderPrice());
        entity.setOrderEntity(orderMapper.toEntity(dto.getOrderDTO()));
        entity.setBottleEntity(bottleMapper.toEntity(dto.getBottleDTO()));

        return entity;
    }
}
