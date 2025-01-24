package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.InventoryDTO;
import com.be.winery_app.dto.OrderItemDTO;
import com.be.winery_app.entity.*;
import com.be.winery_app.mapper.Impl.OrderItemMapperImpl;
import com.be.winery_app.repository.BottleRepository;
import com.be.winery_app.repository.OrderItemRepository;
import com.be.winery_app.repository.OrderRepository;
import com.be.winery_app.service.Interface.OrderItemServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class OrderItemServiceImpl implements OrderItemServiceInterface {

    @Autowired
    private OrderItemRepository repository;

    @Autowired
    private OrderItemMapperImpl mapper;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private BottleRepository bottleRepository;

    @Override
    public List<OrderItemDTO> getAllOrderItemData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public OrderItemDTO getOrderItemObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public OrderItemDTO insertNewOrderItemObjectData(OrderItemDTO body) {
        OrderEntity orderEntity = orderRepository.findById(body.getOrderDTO().getOrderId())
                .orElseThrow(() -> new EntityNotFoundException("Order not found"));

        BottleEntity bottleEntity = bottleRepository.findById(body.getBottleDTO().getBottleId())
                .orElseThrow(() -> new EntityNotFoundException("Bottle not found"));

        OrderItemEntity newOrderItemEntity = new OrderItemEntity();
        newOrderItemEntity.setOrderPrice(body.getOrderPrice());
        newOrderItemEntity.setQuantity(body.getQuantity());
        newOrderItemEntity.setOrderEntity(orderEntity);
        newOrderItemEntity.setBottleEntity(bottleEntity);

        OrderItemEntity savedOrderItem = repository.save(newOrderItemEntity);

        return mapper.toDTO(savedOrderItem);
    }

    @Override
    public OrderItemDTO updateExistingOrderItemObjectData(OrderItemDTO body) {
        OrderItemEntity existingOrderItemEntity = repository.findById(body.getOrderItemId())
                .orElseThrow(() -> new EntityNotFoundException("Order Item not found"));

        OrderEntity orderEntity = orderRepository.findById(body.getOrderDTO().getOrderId())
                .orElseThrow(() -> new EntityNotFoundException("Order not found"));

        BottleEntity bottleEntity = bottleRepository.findById(body.getBottleDTO().getBottleId())
                .orElseThrow(() -> new EntityNotFoundException("Bottle not found"));

        existingOrderItemEntity.setOrderPrice(body.getOrderPrice());
        existingOrderItemEntity.setQuantity(body.getQuantity());
        existingOrderItemEntity.setOrderEntity(orderEntity);
        existingOrderItemEntity.setBottleEntity(bottleEntity);

        OrderItemEntity updatedOrderItem = repository.save(existingOrderItemEntity);
        return mapper.toDTO(updatedOrderItem);
    }


    @Override
    public OrderItemDTO deleteOrderItemObjectData(Integer id) {
        OrderItemDTO deleted = getOrderItemObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
