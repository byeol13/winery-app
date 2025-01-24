package com.be.winery_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name = "supplier")
public class SupplierEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer supplierId;

    @Column(name = "supplier_name", nullable = true, unique = false)
    private String supplierName;

    @Column(name = "address", nullable = true, unique = false)
    private String address;

    @Column(name = "phone", nullable = true, unique = false)
    private String phone;

    @Column(name = "mobile", nullable = true, unique = false)
    private String mobile;

    @Column(name = "email", nullable = true, unique = false)
    private String email;

    @Column(name = "details", nullable = true, unique = false)
    private String details;
}
