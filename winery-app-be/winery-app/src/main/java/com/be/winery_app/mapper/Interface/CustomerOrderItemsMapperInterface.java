package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.CustomerOrderItemsDTO;
import com.be.winery_app.entity.CustomerOrderItemsEntity;

public interface CustomerOrderItemsMapperInterface {

    CustomerOrderItemsDTO toDTO(CustomerOrderItemsEntity entity);
    CustomerOrderItemsEntity toEntity(CustomerOrderItemsDTO dto);
}
