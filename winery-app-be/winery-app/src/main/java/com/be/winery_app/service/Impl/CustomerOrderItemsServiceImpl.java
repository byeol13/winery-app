package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.CustomerOrderItemsDTO;
import com.be.winery_app.dto.InventoryDTO;
import com.be.winery_app.entity.*;
import com.be.winery_app.mapper.Impl.CustomerOrderItemsMapperImpl;
import com.be.winery_app.repository.BottleRepository;
import com.be.winery_app.repository.CustomerOrderItemsRepository;
import com.be.winery_app.repository.CustomerOrderRepository;
import com.be.winery_app.service.Interface.CustomerOrderItemsServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomerOrderItemsServiceImpl implements CustomerOrderItemsServiceInterface {

    @Autowired
    private CustomerOrderItemsRepository repository;

    @Autowired
    private CustomerOrderItemsMapperImpl mapper;

    @Autowired
    private CustomerOrderRepository customerOrderRepository;

    @Autowired
    private BottleRepository bottleRepository;

    @Override
    public List<CustomerOrderItemsDTO> getAllCustomerOrderItemsData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CustomerOrderItemsDTO getCustomerOrderItemsObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public CustomerOrderItemsDTO insertNewCustomerOrderItemsObjectData(CustomerOrderItemsDTO body) {
        CustomerOrderEntity customerOrderEntity = customerOrderRepository.findById(body.getCustomerOrderDTO().getCustomerOrderId())
                .orElseThrow(() -> new EntityNotFoundException("Customer Order not found"));

        BottleEntity bottleEntity = bottleRepository.findById(body.getBottleDTO().getBottleId())
                .orElseThrow(() -> new EntityNotFoundException("Bottle not found"));

        CustomerOrderItemsEntity newCustomerOrderItemsEntity = new CustomerOrderItemsEntity();
        newCustomerOrderItemsEntity.setOrderPrice(body.getOrderPrice());
        newCustomerOrderItemsEntity.setQuantity(body.getQuantity());
        newCustomerOrderItemsEntity.setCustomerOrderEntity(customerOrderEntity);
        newCustomerOrderItemsEntity.setBottleEntity(bottleEntity);

        CustomerOrderItemsEntity savedCustomerOrderItems = repository.save(newCustomerOrderItemsEntity);

        return mapper.toDTO(savedCustomerOrderItems);
    }

    @Override
    public CustomerOrderItemsDTO updateExistingCustomerOrderItemsObjectData(CustomerOrderItemsDTO body) {
        CustomerOrderItemsEntity existingCustomerOrderItems = repository.findById(body.getCustomerOrderItemId())
                .orElseThrow(() -> new EntityNotFoundException("Customer Order Items not found"));

        CustomerOrderEntity customerOrderEntity = customerOrderRepository.findById(body.getCustomerOrderDTO().getCustomerOrderId())
                .orElseThrow(() -> new EntityNotFoundException("Customer Order not found"));

        BottleEntity bottleEntity = bottleRepository.findById(body.getBottleDTO().getBottleId())
                .orElseThrow(() -> new EntityNotFoundException("Bottle not found"));

        existingCustomerOrderItems.setOrderPrice(body.getOrderPrice());
        existingCustomerOrderItems.setQuantity(body.getQuantity());
        existingCustomerOrderItems.setCustomerOrderEntity(customerOrderEntity);
        existingCustomerOrderItems.setBottleEntity(bottleEntity);

        CustomerOrderItemsEntity updatedCustomerOrderItems = repository.save(existingCustomerOrderItems);
        return mapper.toDTO(updatedCustomerOrderItems);
    }

    @Override
    public CustomerOrderItemsDTO deleteCustomerOrderItemsObjectData(Integer id) {
        CustomerOrderItemsDTO deleted = getCustomerOrderItemsObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
