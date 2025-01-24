package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.SupplierDTO;
import com.be.winery_app.entity.SupplierEntity;

public interface SupplierMapperInterface {

    SupplierDTO toDTO(SupplierEntity entity);
    SupplierEntity toEntity(SupplierDTO dto);
}
