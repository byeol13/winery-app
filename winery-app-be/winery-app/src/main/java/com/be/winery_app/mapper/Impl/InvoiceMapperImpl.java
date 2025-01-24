package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.InvoiceDTO;
import com.be.winery_app.entity.InvoiceEntity;
import com.be.winery_app.mapper.Interface.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class InvoiceMapperImpl implements InvoiceMapperInterface {

    @Autowired
    private StoreMapperInterface storeMapper;

    @Autowired
    private CustomerOrderMapperInterface customerOrderMapper;

    @Autowired
    private CustomerMapperInterface customerMapper;

    @Autowired
    private EmployeeMapperInterface employeeMapper;

    @Override
    public InvoiceDTO toDTO(InvoiceEntity entity) {
        if (entity == null) return null;

        InvoiceDTO dto = new InvoiceDTO();
        dto.setInvoiceId(entity.getInvoiceId());
        dto.setInvoiceNumber(entity.getInvoiceNumber());
        dto.setInvoiceTotal(entity.getInvoiceTotal());
        dto.setTimeCreated(entity.getTimeCreated());
        dto.setStoreDTO(storeMapper.toDTO(entity.getStoreEntity()));
        dto.setCustomerOrderDTO(customerOrderMapper.toDTO(entity.getCustomerOrderEntity()));
        dto.setCustomerDTO(customerMapper.toDTO(entity.getCustomerEntity()));
        dto.setEmployeeDTO(employeeMapper.toDTO(entity.getEmployeeEntity()));

        return dto;
    }

    @Override
    public InvoiceEntity toEntity(InvoiceDTO dto) {
        if (dto == null) return null;

        InvoiceEntity entity = new InvoiceEntity();
        entity.setInvoiceId(dto.getInvoiceId());
        entity.setInvoiceNumber(dto.getInvoiceNumber());
        entity.setInvoiceTotal(dto.getInvoiceTotal());
        entity.setTimeCreated(dto.getTimeCreated());
        entity.setStoreEntity(storeMapper.toEntity(dto.getStoreDTO()));
        entity.setCustomerOrderEntity(customerOrderMapper.toEntity(dto.getCustomerOrderDTO()));
        entity.setCustomerEntity(customerMapper.toEntity(dto.getCustomerDTO()));
        entity.setEmployeeEntity(employeeMapper.toEntity(dto.getEmployeeDTO()));

        return entity;
    }
}
