package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter @Setter
public class EmployeeDTO {
    private Integer employeeId;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String phone;
    private String email;
    private Boolean isActive;
}
