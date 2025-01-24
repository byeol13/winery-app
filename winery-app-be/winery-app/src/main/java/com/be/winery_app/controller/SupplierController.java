package com.be.winery_app.controller;

import com.be.winery_app.dto.SupplierDTO;
import com.be.winery_app.service.Impl.SupplierServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/suppliers")
public class SupplierController {

    @Autowired
    private SupplierServiceImpl service;

    @GetMapping("/getAllSuppliers")
    public List<SupplierDTO> getAllSuppliers() {
        return service.getAllSupplierData();
    }

    @GetMapping("/getSupplierById")
    public SupplierDTO getSupplierById(@Validated @RequestParam(name = "supplierId") Integer id) {
        return service.getSupplierObjectById(id);
    }

    @PostMapping("/newSupplier")
    public SupplierDTO createSupplier(@Validated @RequestBody SupplierDTO body) {
        return service.insertNewSupplierObjectData(body);
    }

    @PutMapping("/updateSupplier")
    public SupplierDTO updateSupplier(@Validated @RequestBody SupplierDTO body) {
        return service.updateExistingSupplierObjectData(body);
    }

    @DeleteMapping("/deleteSupplier/{id}")
    public SupplierDTO deleteSupplier(@Validated @PathVariable("id") Integer id) {
        return service.deleteSupplierObjectData(id);
    }
}
