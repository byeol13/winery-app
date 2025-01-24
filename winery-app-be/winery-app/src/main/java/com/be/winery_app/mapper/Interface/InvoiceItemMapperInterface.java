package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.InvoiceItemDTO;
import com.be.winery_app.entity.InvoiceItemEntity;

public interface InvoiceItemMapperInterface {

    InvoiceItemDTO toDTO(InvoiceItemEntity entity);
    InvoiceItemEntity toEntity(InvoiceItemDTO dto);
}
