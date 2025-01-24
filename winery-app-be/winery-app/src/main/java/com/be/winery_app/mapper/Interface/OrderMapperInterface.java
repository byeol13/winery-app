package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.OrderDTO;
import com.be.winery_app.entity.OrderEntity;

public interface OrderMapperInterface {

    OrderDTO toDTO(OrderEntity entity);
    OrderEntity toEntity(OrderDTO dto);
}
