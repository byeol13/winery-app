package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.OrderItemDTO;

import java.util.List;

public interface OrderItemServiceInterface {

    List<OrderItemDTO> getAllOrderItemData();
    OrderItemDTO getOrderItemObjectById(Integer id);
    OrderItemDTO insertNewOrderItemObjectData(OrderItemDTO body);
    OrderItemDTO updateExistingOrderItemObjectData(OrderItemDTO body);
    OrderItemDTO deleteOrderItemObjectData(Integer id);

}
