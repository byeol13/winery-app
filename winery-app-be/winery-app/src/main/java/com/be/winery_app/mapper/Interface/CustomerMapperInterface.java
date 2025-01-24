package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.CustomerDTO;
import com.be.winery_app.entity.CustomerEntity;

public interface CustomerMapperInterface {

    CustomerDTO toDTO(CustomerEntity entity);
    CustomerEntity toEntity(CustomerDTO dto);
}
