package com.be.winery_app.entity;

import com.be.winery_app.dto.EmployeeDTO;
import com.be.winery_app.dto.StoreDTO;
import com.be.winery_app.dto.SupplierDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDate;

@Getter @Setter
@Entity
@Table(name = "order_list")
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer orderId;

    @Column(name = "order_number", nullable = true, unique = false)
    private String orderNumber;

    @Column(name = "expected_delivery_date", nullable = true, unique = false)
    private Timestamp expectedDeliveryDate;

    @Column(name = "time_placed", nullable = true, unique = false)
    private Timestamp timePlaced;

    @Column(name = "time_canceled", nullable = true, unique = false)
    private Timestamp timeCanceled;

    @Column(name = "time_delivered", nullable = true, unique = false)
    private Timestamp timeDelivered;

    @Column(name = "order_price", nullable = true, unique = false)
    private BigDecimal orderPrice;

    @ManyToOne
    @JoinColumn(name = "supplier_id", nullable = false)
    private SupplierEntity supplierEntity;

    @ManyToOne
    @JoinColumn(name = "store_id", nullable = false)
    private StoreEntity storeEntity;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private EmployeeEntity employeeEntity;
}
