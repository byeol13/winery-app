package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.InvoiceItemDTO;

import java.util.List;

public interface InvoiceItemServiceInterface {

    List<InvoiceItemDTO> getAllInvoiceItemData();
    InvoiceItemDTO getInvoiceItemObjectById(Integer id);
    InvoiceItemDTO insertNewInvoiceItemObjectData(InvoiceItemDTO body);
    InvoiceItemDTO updateExistingInvoiceItemObjectData(InvoiceItemDTO body);
    InvoiceItemDTO deleteInvoiceItemObjectData(Integer id);

}
