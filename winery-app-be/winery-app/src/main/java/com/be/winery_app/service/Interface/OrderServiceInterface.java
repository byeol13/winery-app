package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.OrderDTO;

import java.util.List;

public interface OrderServiceInterface {

    List<OrderDTO> getAllOrderData();
    OrderDTO getOrderObjectById(Integer id);
    OrderDTO insertNewOrderObjectData(OrderDTO body);
    OrderDTO updateExistingOrderObjectData(OrderDTO body);
    OrderDTO deleteOrderObjectData(Integer id);

}
