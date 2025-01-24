package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.CustomerOrderDTO;

import java.util.List;

public interface CustomerOrderServiceInterface {

    List<CustomerOrderDTO> getAllCustomerOrderData();
    CustomerOrderDTO getCustomerOrderObjectById(Integer id);
    CustomerOrderDTO insertNewCustomerOrderObjectData(CustomerOrderDTO body);
    CustomerOrderDTO updateExistingCustomerOrderObjectData(CustomerOrderDTO body);
    CustomerOrderDTO deleteCustomerOrderObjectData(Integer id);

}
