package com.be.winery_app.controller;

import com.be.winery_app.dto.CustomerOrderDTO;
import com.be.winery_app.service.Impl.CustomerOrderServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/customerOrders")
public class CustomerOrderController {

    @Autowired
    private CustomerOrderServiceImpl service;

    @GetMapping("/getAllCustomerOrders")
    public List<CustomerOrderDTO> getAllCustomerOrders() {
        return service.getAllCustomerOrderData();
    }

    @GetMapping("/getCustomerOrderById")
    public CustomerOrderDTO getCustomerOrderById(@Validated @RequestParam(name = "customerOrderId") Integer id) {
        return service.getCustomerOrderObjectById(id);
    }

    @PostMapping("/newCustomerOrder")
    public CustomerOrderDTO createCustomerOrder(@Validated @RequestBody CustomerOrderDTO body) {
        return service.insertNewCustomerOrderObjectData(body);
    }

    @PutMapping("/updateCustomerOrder")
    public CustomerOrderDTO updateCustomerOrder(@Validated @RequestBody CustomerOrderDTO body) {
        return service.updateExistingCustomerOrderObjectData(body);
    }

    @DeleteMapping("/deleteCustomerOrder/{id}")
    public CustomerOrderDTO deleteCustomerOrder(@Validated @PathVariable("id") Integer id) {
        return service.deleteCustomerOrderObjectData(id);
    }
}
