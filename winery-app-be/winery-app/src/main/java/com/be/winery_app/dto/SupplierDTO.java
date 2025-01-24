package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SupplierDTO {
    private Integer supplierId;
    private String supplierName;
    private String address;
    private String phone;
    private String mobile;
    private String email;
    private String details;
}
