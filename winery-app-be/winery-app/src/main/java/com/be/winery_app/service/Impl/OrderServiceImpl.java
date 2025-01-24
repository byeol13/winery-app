package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.InventoryDTO;
import com.be.winery_app.dto.OrderDTO;
import com.be.winery_app.entity.*;
import com.be.winery_app.mapper.Impl.OrderMapperImpl;
import com.be.winery_app.repository.EmployeeRepository;
import com.be.winery_app.repository.OrderRepository;
import com.be.winery_app.repository.StoreRepository;
import com.be.winery_app.repository.SupplierRepository;
import com.be.winery_app.service.Interface.OrderServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class OrderServiceImpl implements OrderServiceInterface {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private OrderMapperImpl mapper;

    @Autowired
    private SupplierRepository supplierRepository;

    @Autowired
    private StoreRepository storeRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<OrderDTO> getAllOrderData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public OrderDTO getOrderObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public OrderDTO insertNewOrderObjectData(OrderDTO body) {
        SupplierEntity supplierEntity = supplierRepository.findById(body.getSupplierDTO().getSupplierId())
                .orElseThrow(() -> new EntityNotFoundException(("Supplier not found")));

        StoreEntity storeEntity = storeRepository.findById(body.getStoreDTO().getStoreId())
                .orElseThrow(() -> new EntityNotFoundException("Store not found"));

        EmployeeEntity employeeEntity = employeeRepository.findById(body.getEmployeeDTO().getEmployeeId())
                .orElseThrow(() -> new EntityNotFoundException("Employee not found"));

        OrderEntity newOrderEntity = new OrderEntity();
        newOrderEntity.setOrderNumber(body.getOrderNumber());
        newOrderEntity.setOrderPrice(body.getOrderPrice());
        newOrderEntity.setTimePlaced(body.getTimePlaced());
        newOrderEntity.setExpectedDeliveryDate(body.getExpectedDeliveryDate());
        newOrderEntity.setTimeCanceled(body.getTimeCanceled());
        newOrderEntity.setTimeDelivered(body.getTimeDelivered());
        newOrderEntity.setSupplierEntity(supplierEntity);
        newOrderEntity.setStoreEntity(storeEntity);
        newOrderEntity.setEmployeeEntity(employeeEntity);

        OrderEntity savedOrder = repository.save(newOrderEntity);

        return mapper.toDTO(savedOrder);
    }

    @Override
    public OrderDTO updateExistingOrderObjectData(OrderDTO body) {
        OrderEntity existingOrderEntity = repository.findById(body.getOrderId())
                .orElseThrow(() -> new EntityNotFoundException("Order not found"));

        SupplierEntity supplierEntity = supplierRepository.findById(body.getSupplierDTO().getSupplierId())
                .orElseThrow(() -> new EntityNotFoundException(("Supplier not found")));

        StoreEntity storeEntity = storeRepository.findById(body.getStoreDTO().getStoreId())
                .orElseThrow(() -> new EntityNotFoundException("Store not found"));

        EmployeeEntity employeeEntity = employeeRepository.findById(body.getEmployeeDTO().getEmployeeId())
                .orElseThrow(() -> new EntityNotFoundException("Employee not found"));

        existingOrderEntity.setOrderNumber(body.getOrderNumber());
        existingOrderEntity.setOrderPrice(body.getOrderPrice());
        existingOrderEntity.setTimePlaced(body.getTimePlaced());
        existingOrderEntity.setExpectedDeliveryDate(body.getExpectedDeliveryDate());
        existingOrderEntity.setTimeCanceled(body.getTimeCanceled());
        existingOrderEntity.setTimeDelivered(body.getTimeDelivered());
        existingOrderEntity.setSupplierEntity(supplierEntity);
        existingOrderEntity.setStoreEntity(storeEntity);
        existingOrderEntity.setEmployeeEntity(employeeEntity);

        OrderEntity updatedOrder = repository.save(existingOrderEntity);
        return mapper.toDTO(updatedOrder);
    }


    @Override
    public OrderDTO deleteOrderObjectData(Integer id) {
        OrderDTO deleted = getOrderObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
