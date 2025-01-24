package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.CustomerOrderItemsDTO;

import java.util.List;

public interface CustomerOrderItemsServiceInterface {

    List<CustomerOrderItemsDTO> getAllCustomerOrderItemsData();
    CustomerOrderItemsDTO getCustomerOrderItemsObjectById(Integer id);
    CustomerOrderItemsDTO insertNewCustomerOrderItemsObjectData(CustomerOrderItemsDTO body);
    CustomerOrderItemsDTO updateExistingCustomerOrderItemsObjectData(CustomerOrderItemsDTO body);
    CustomerOrderItemsDTO deleteCustomerOrderItemsObjectData(Integer id);

}
