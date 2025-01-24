package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.OrderItemDTO;
import com.be.winery_app.entity.OrderItemEntity;

public interface OrderItemMapperInterface {

    OrderItemDTO toDTO(OrderItemEntity entity);
    OrderItemEntity toEntity(OrderItemDTO dto);
}
