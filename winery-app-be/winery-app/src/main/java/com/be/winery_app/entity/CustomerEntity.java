package com.be.winery_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter @Setter
@Entity
@Table(name = "customer")
public class CustomerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer customerId;

    @Column(name = "username", nullable = true, unique = false)
    private String username;

    @Column(name = "password", nullable = true, unique = false)
    private String password;

    @Column(name = "customer_name", nullable = true, unique = false)
    private String customerName;

    @Column(name = "address", nullable = true, unique = false)
    private String address;

    @Column(name = "phone", nullable = true, unique = false)
    private String phone;

    @Column(name = "email", nullable = true, unique = false)
    private String email;
}
