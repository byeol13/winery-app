package com.be.winery_app.controller;

import com.be.winery_app.dto.InvoiceItemDTO;
import com.be.winery_app.service.Impl.InvoiceItemServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/invoiceItems")
public class InvoiceItemController {

    @Autowired
    private InvoiceItemServiceImpl service;

    @GetMapping("/getAllInvoiceItems")
    public List<InvoiceItemDTO> getAllInvoiceItems() {
        return service.getAllInvoiceItemData();
    }

    @GetMapping("/getInvoiceItemById")
    public InvoiceItemDTO getInvoiceItemById(@Validated @RequestParam(name = "invoiceItemId") Integer id) {
        return service.getInvoiceItemObjectById(id);
    }

    @PostMapping("/newInvoiceItem")
    public InvoiceItemDTO createInvoiceItem(@Validated @RequestBody InvoiceItemDTO body) {
        return service.insertNewInvoiceItemObjectData(body);
    }

    @PutMapping("/updateInvoiceItem")
    public InvoiceItemDTO updateInvoiceItem(@Validated @RequestBody InvoiceItemDTO body) {
        return service.updateExistingInvoiceItemObjectData(body);
    }

    @DeleteMapping("/deleteInvoiceItem/{id}")
    public InvoiceItemDTO deleteInvoiceItem(@Validated @PathVariable("id") Integer id) {
        return service.deleteInvoiceItemObjectData(id);
    }
}
