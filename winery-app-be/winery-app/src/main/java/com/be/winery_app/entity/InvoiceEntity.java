package com.be.winery_app.entity;

import com.be.winery_app.dto.CustomerDTO;
import com.be.winery_app.dto.CustomerOrderDTO;
import com.be.winery_app.dto.EmployeeDTO;
import com.be.winery_app.dto.StoreDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Getter @Setter
@Entity
@Table(name = "invoice")
public class InvoiceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer invoiceId;

    @Column(name = "invoice_number", nullable = true, unique = false)
    private String invoiceNumber;

    @Column(name = "invoice_total", nullable = true, unique = false)
    private BigDecimal invoiceTotal;

    @Column(name = "time_created", nullable = true, unique = false)
    private Timestamp timeCreated;

    @ManyToOne
    @JoinColumn(name = "store_id", nullable = false)
    private StoreEntity storeEntity;

    @ManyToOne
    @JoinColumn(name = "customer_order_id", nullable = false)
    private CustomerOrderEntity customerOrderEntity;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerEntity customerEntity;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private EmployeeEntity employeeEntity;
}
