package com.be.winery_app.entity;

import com.be.winery_app.dto.BottleDTO;
import com.be.winery_app.dto.CustomerOrderDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
@Entity
@Table(name = "customer_order_items")
public class CustomerOrderItemsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer customerOrderItemId;

    @Column(name = "quantity", nullable = true, unique = false)
    private Integer quantity;

    @Column(name = "order_price", nullable = true, unique = false)
    private BigDecimal orderPrice;

    @ManyToOne
    @JoinColumn(name = "customer_order_id", nullable = false)
    private CustomerOrderEntity customerOrderEntity;

    @ManyToOne
    @JoinColumn(name = "bottle_id", nullable = false)
    private BottleEntity bottleEntity;
}
