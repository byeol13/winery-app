package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.SupplierDTO;
import com.be.winery_app.entity.SupplierEntity;
import com.be.winery_app.mapper.Interface.SupplierMapperInterface;
import org.springframework.stereotype.Component;

@Component
public class SupplierMapperImpl implements SupplierMapperInterface {

    @Override
    public SupplierDTO toDTO(SupplierEntity entity) {
        if (entity == null) return null;

        SupplierDTO dto = new SupplierDTO();
        dto.setSupplierId(entity.getSupplierId());
        dto.setSupplierName(entity.getSupplierName());
        dto.setAddress(entity.getAddress());
        dto.setPhone(entity.getPhone());
        dto.setMobile(entity.getMobile());
        dto.setEmail(entity.getEmail());
        dto.setDetails(entity.getDetails());

        return dto;
    }

    @Override
    public SupplierEntity toEntity(SupplierDTO dto) {
        if (dto == null) return null;

        SupplierEntity entity = new SupplierEntity();
        entity.setSupplierId(dto.getSupplierId());
        entity.setSupplierName(dto.getSupplierName());
        entity.setAddress(dto.getAddress());
        entity.setPhone(dto.getPhone());
        entity.setMobile(dto.getMobile());
        entity.setEmail(dto.getEmail());
        entity.setDetails(dto.getDetails());

        return entity;
    }
}
