package com.be.winery_app.controller;

import com.be.winery_app.dto.CustomerOrderItemsDTO;
import com.be.winery_app.service.Impl.CustomerOrderItemsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/customerOrderItems")
public class CustomerOrderItemsController {

    @Autowired
    private CustomerOrderItemsServiceImpl service;

    @GetMapping("/getAllCustomerOrderItems")
    public List<CustomerOrderItemsDTO> getAllCustomerOrderItems() {
        return service.getAllCustomerOrderItemsData();
    }

    @GetMapping("/getCustomerOrderItemById")
    public CustomerOrderItemsDTO getCustomerOrderItemsById(@Validated @RequestParam(name = "customerOrderItemId") Integer id) {
        return service.getCustomerOrderItemsObjectById(id);
    }

    @PostMapping("/newCustomerOrderItems")
    public CustomerOrderItemsDTO createCustomerOrderItems(@Validated @RequestBody CustomerOrderItemsDTO body) {
        return service.insertNewCustomerOrderItemsObjectData(body);
    }

    @PutMapping("/updateCustomerOrderItems")
    public CustomerOrderItemsDTO updateCustomerOrderItems(@Validated @RequestBody CustomerOrderItemsDTO body) {
        return service.updateExistingCustomerOrderItemsObjectData(body);
    }

    @DeleteMapping("/deleteCustomerOrderItems/{id}")
    public CustomerOrderItemsDTO deleteCustomerOrderItems(@Validated @PathVariable("id") Integer id) {
        return service.deleteCustomerOrderItemsObjectData(id);
    }
}
