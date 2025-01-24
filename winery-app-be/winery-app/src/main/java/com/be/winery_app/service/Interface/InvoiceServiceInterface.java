package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.InventoryDTO;
import com.be.winery_app.dto.InvoiceDTO;

import java.util.List;

public interface InvoiceServiceInterface {

    List<InvoiceDTO> getAllInvoiceData();
    InvoiceDTO getInvoiceObjectById(Integer id);
    InvoiceDTO insertNewInvoiceObjectData(InvoiceDTO body);
    InvoiceDTO updateExistingInvoiceObjectData(InvoiceDTO body);
    InvoiceDTO deleteInvoiceObjectData(Integer id);

}
