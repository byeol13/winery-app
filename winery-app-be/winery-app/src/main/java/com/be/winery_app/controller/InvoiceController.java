package com.be.winery_app.controller;

import com.be.winery_app.dto.InvoiceDTO;
import com.be.winery_app.service.Impl.InvoiceServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/invoices")
public class InvoiceController {

    @Autowired
    private InvoiceServiceImpl service;

    @GetMapping("/getAllInvoices")
    public List<InvoiceDTO> getAllInvoices() {
        return service.getAllInvoiceData();
    }

    @GetMapping("/getInvoiceById")
    public InvoiceDTO getInvoiceById(@Validated @RequestParam(name = "invoiceId") Integer id) {
        return service.getInvoiceObjectById(id);
    }

    @PostMapping("/newInvoice")
    public InvoiceDTO createInvoice(@Validated @RequestBody InvoiceDTO body) {
        return service.insertNewInvoiceObjectData(body);
    }

    @PutMapping("/updateInvoice")
    public InvoiceDTO updateInvoice(@Validated @RequestBody InvoiceDTO body) {
        return service.updateExistingInvoiceObjectData(body);
    }

    @DeleteMapping("/deleteInvoice/{id}")
    public InvoiceDTO deleteInvoice(@Validated @PathVariable("id") Integer id) {
        return service.deleteInvoiceObjectData(id);
    }
}
