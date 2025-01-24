package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.EmployeeDTO;
import com.be.winery_app.entity.EmployeeEntity;

public interface EmployeeMapperInterface {

    EmployeeDTO toDTO(EmployeeEntity entity);
    EmployeeEntity toEntity(EmployeeDTO dto);
}
