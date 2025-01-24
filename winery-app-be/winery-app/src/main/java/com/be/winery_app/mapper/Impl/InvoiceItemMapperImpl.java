package com.be.winery_app.mapper.Impl;

import com.be.winery_app.dto.InvoiceItemDTO;
import com.be.winery_app.entity.InvoiceItemEntity;
import com.be.winery_app.mapper.Interface.BottleMapperInterface;
import com.be.winery_app.mapper.Interface.InvoiceItemMapperInterface;
import com.be.winery_app.mapper.Interface.InvoiceMapperInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class InvoiceItemMapperImpl implements InvoiceItemMapperInterface {

    @Autowired
    private InvoiceMapperInterface invoiceMapper;

    @Autowired
    private BottleMapperInterface bottleMapper;

    @Override
    public InvoiceItemDTO toDTO(InvoiceItemEntity entity) {
        if (entity == null) return null;

        InvoiceItemDTO dto = new InvoiceItemDTO();
        dto.setInvoiceItemId(entity.getInvoiceItemId());
        dto.setQuantity(entity.getQuantity());
        dto.setItemPrice(entity.getItemPrice());
        dto.setInvoiceDTO(invoiceMapper.toDTO(entity.getInvoiceEntity()));
        dto.setBottleDTO(bottleMapper.toDTO(entity.getBottleEntity()));

        return dto;
    }

    @Override
    public InvoiceItemEntity toEntity(InvoiceItemDTO dto) {
        if (dto == null) return null;

        InvoiceItemEntity entity = new InvoiceItemEntity();
        entity.setInvoiceItemId(dto.getInvoiceItemId());
        entity.setQuantity(dto.getQuantity());
        entity.setItemPrice(dto.getItemPrice());
        entity.setInvoiceEntity(invoiceMapper.toEntity(dto.getInvoiceDTO()));
        entity.setBottleEntity(bottleMapper.toEntity(dto.getBottleDTO()));

        return entity;
    }
}
