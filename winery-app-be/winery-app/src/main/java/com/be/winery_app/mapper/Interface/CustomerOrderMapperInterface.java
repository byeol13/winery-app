package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.CustomerOrderDTO;
import com.be.winery_app.entity.CustomerOrderEntity;

public interface CustomerOrderMapperInterface {

    CustomerOrderDTO toDTO(CustomerOrderEntity entity);
    CustomerOrderEntity toEntity(CustomerOrderDTO dto);
}
