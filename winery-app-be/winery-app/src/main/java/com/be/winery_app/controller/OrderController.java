package com.be.winery_app.controller;

import com.be.winery_app.dto.OrderDTO;
import com.be.winery_app.service.Impl.OrderServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderServiceImpl service;

    @GetMapping("/getAllOrders")
    public List<OrderDTO> getAllOrders() {
        return service.getAllOrderData();
    }

    @GetMapping("/getOrderById")
    public OrderDTO getOrderById(@Validated @RequestParam(name = "orderId") Integer id) {
        return service.getOrderObjectById(id);
    }

    @PostMapping("/newOrder")
    public OrderDTO createOrder(@Validated @RequestBody OrderDTO body) {
        return service.insertNewOrderObjectData(body);
    }

    @PutMapping("/updateOrder")
    public OrderDTO updateOrder(@Validated @RequestBody OrderDTO body) {
        return service.updateExistingOrderObjectData(body);
    }

    @DeleteMapping("/deleteOrder/{id}")
    public OrderDTO deleteOrder(@Validated @PathVariable("id") Integer id) {
        return service.deleteOrderObjectData(id);
    }
}
