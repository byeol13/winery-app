package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.CustomerOrderDTO;
import com.be.winery_app.dto.InventoryDTO;
import com.be.winery_app.entity.*;
import com.be.winery_app.mapper.Impl.CustomerOrderMapperImpl;
import com.be.winery_app.repository.CustomerOrderRepository;
import com.be.winery_app.repository.CustomerRepository;
import com.be.winery_app.repository.StoreRepository;
import com.be.winery_app.service.Interface.CustomerOrderServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomerOrderServiceImpl implements CustomerOrderServiceInterface {

    @Autowired
    private CustomerOrderRepository repository;

    @Autowired
    private CustomerOrderMapperImpl mapper;

    @Autowired
    private StoreRepository storeRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<CustomerOrderDTO> getAllCustomerOrderData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CustomerOrderDTO getCustomerOrderObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public CustomerOrderDTO insertNewCustomerOrderObjectData(CustomerOrderDTO body) {
        StoreEntity storeEntity = storeRepository.findById(body.getStoreDTO().getStoreId())
                .orElseThrow(() -> new EntityNotFoundException("Store not found"));

        CustomerEntity customerEntity = customerRepository.findById(body.getCustomerDTO().getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

        CustomerOrderEntity newCustomerOrderEntity = new CustomerOrderEntity();
        newCustomerOrderEntity.setOrderNumber(body.getOrderNumber());
        newCustomerOrderEntity.setOrderPrice(body.getOrderPrice());
        newCustomerOrderEntity.setTimePlaced(body.getTimePlaced());
        newCustomerOrderEntity.setExpectedDeliveryDate(body.getExpectedDeliveryDate());
        newCustomerOrderEntity.setStoreEntity(storeEntity);
        newCustomerOrderEntity.setCustomerEntity(customerEntity);

        CustomerOrderEntity savedCustomerOrder = repository.save(newCustomerOrderEntity);

        return mapper.toDTO(savedCustomerOrder);
    }

    @Override
    public CustomerOrderDTO updateExistingCustomerOrderObjectData(CustomerOrderDTO body) {
        CustomerOrderEntity existingCustomerOrderEntity = repository.findById(body.getCustomerOrderId())
                .orElseThrow(() -> new EntityNotFoundException("Customer Order not found"));

        StoreEntity storeEntity = storeRepository.findById(body.getStoreDTO().getStoreId())
                .orElseThrow(() -> new EntityNotFoundException("Store not found"));

        CustomerEntity customerEntity = customerRepository.findById(body.getCustomerDTO().getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

        existingCustomerOrderEntity.setOrderNumber(body.getOrderNumber());
        existingCustomerOrderEntity.setOrderPrice(body.getOrderPrice());
        existingCustomerOrderEntity.setTimePlaced(body.getTimePlaced());
        existingCustomerOrderEntity.setExpectedDeliveryDate(body.getExpectedDeliveryDate());
        existingCustomerOrderEntity.setStoreEntity(storeEntity);
        existingCustomerOrderEntity.setCustomerEntity(customerEntity);

        CustomerOrderEntity updatedCustomerOrder = repository.save(existingCustomerOrderEntity);
        return mapper.toDTO(updatedCustomerOrder);
    }

    @Override
    public CustomerOrderDTO deleteCustomerOrderObjectData(Integer id) {
        CustomerOrderDTO deleted = getCustomerOrderObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
