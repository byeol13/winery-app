package com.be.winery_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter @Setter
@Entity
@Table(name = "employee")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer employeeId;

    @Column(name = "first_name", nullable = true, unique = false)
    private String firstName;

    @Column(name = "last_name", nullable = true, unique = false)
    private String lastName;

    @Column(name = "username", nullable = true, unique = false)
    private String username;

    @Column(name = "password", nullable = true, unique = false)
    private String password;

    @Column(name = "phone", nullable = true, unique = false)
    private String phone;

    @Column(name = "email", nullable = true, unique = false)
    private String email;

    @Column(name = "is_active", nullable = true, unique = false)
    private Boolean isActive;
}
