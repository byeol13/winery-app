package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter @Setter
public class CustomerDTO {
    private Integer customerId;
    private String username;
    private String password;
    private String customerName;
    private String address;
    private String phone;
    private String email;
}
