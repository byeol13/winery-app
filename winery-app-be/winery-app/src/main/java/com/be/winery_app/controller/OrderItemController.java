package com.be.winery_app.controller;

import com.be.winery_app.dto.OrderDTO;
import com.be.winery_app.dto.OrderItemDTO;
import com.be.winery_app.service.Impl.OrderItemServiceImpl;
import com.be.winery_app.service.Impl.OrderServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/orderItems")
public class OrderItemController {

    @Autowired
    private OrderItemServiceImpl service;

    @GetMapping("/getAllOrderItems")
    public List<OrderItemDTO> getAllOrderItems() {
        return service.getAllOrderItemData();
    }

    @GetMapping("/getOrderItemById")
    public OrderItemDTO getOrderItemById(@Validated @RequestParam(name = "orderItemId") Integer id) {
        return service.getOrderItemObjectById(id);
    }

    @PostMapping("/newOrderItem")
    public OrderItemDTO createOrderItem(@Validated @RequestBody OrderItemDTO body) {
        return service.insertNewOrderItemObjectData(body);
    }

    @PutMapping("/updateOrderItem")
    public OrderItemDTO updateOrderItem(@Validated @RequestBody OrderItemDTO body) {
        return service.updateExistingOrderItemObjectData(body);
    }

    @DeleteMapping("/deleteOrderItem/{id}")
    public OrderItemDTO deleteOrderItem(@Validated @PathVariable("id") Integer id) {
        return service.deleteOrderItemObjectData(id);
    }
}
