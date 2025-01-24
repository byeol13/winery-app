package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.InvoiceDTO;
import com.be.winery_app.entity.InvoiceEntity;

public interface InvoiceMapperInterface {

    InvoiceDTO toDTO(InvoiceEntity entity);
    InvoiceEntity toEntity(InvoiceDTO dto);
}
