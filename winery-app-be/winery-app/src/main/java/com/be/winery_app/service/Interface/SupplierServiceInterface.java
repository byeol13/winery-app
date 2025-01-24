package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.SupplierDTO;

import java.util.List;

public interface SupplierServiceInterface {

    List<SupplierDTO> getAllSupplierData();
    SupplierDTO getSupplierObjectById(Integer id);
    SupplierDTO insertNewSupplierObjectData(SupplierDTO body);
    SupplierDTO updateExistingSupplierObjectData(SupplierDTO body);
    SupplierDTO deleteSupplierObjectData(Integer id);

}
