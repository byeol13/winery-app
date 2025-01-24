package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Getter @Setter
public class InvoiceDTO {
    private Integer invoiceId;
    private String invoiceNumber;
    private BigDecimal invoiceTotal;
    private Timestamp timeCreated;
    private StoreDTO storeDTO;
    private CustomerOrderDTO customerOrderDTO;
    private CustomerDTO customerDTO;
    private EmployeeDTO employeeDTO;
}
