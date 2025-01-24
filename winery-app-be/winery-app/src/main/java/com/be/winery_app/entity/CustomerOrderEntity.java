package com.be.winery_app.entity;

import com.be.winery_app.dto.CustomerDTO;
import com.be.winery_app.dto.StoreDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDate;

@Getter @Setter
@Entity
@Table(name = "customer_order")
public class CustomerOrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer customerOrderId;

    @Column(name = "order_number", nullable = true, unique = false)
    private Integer orderNumber;

    @Column(name = "expected_delivery_date", nullable = true, unique = false)
    private LocalDate expectedDeliveryDate;

    @Column(name = "time_placed", nullable = true, unique = false)
    private Timestamp timePlaced;

    @Column(name = "order_price", nullable = true, unique = false)
    private BigDecimal orderPrice;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerEntity customerEntity;

    @ManyToOne
    @JoinColumn(name = "store_id", nullable = false)
    private StoreEntity storeEntity;
}
