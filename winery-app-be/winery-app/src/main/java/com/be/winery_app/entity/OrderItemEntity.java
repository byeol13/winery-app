package com.be.winery_app.entity;

import com.be.winery_app.dto.BottleDTO;
import com.be.winery_app.dto.OrderDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
@Entity
@Table(name = "order_item")
public class OrderItemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer orderItemId;

    @Column(name = "quantity", nullable = true, unique = false)
    private Integer quantity;

    @Column(name = "order_price", nullable = true, unique = false)
    private BigDecimal orderPrice;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private OrderEntity orderEntity;

    @ManyToOne
    @JoinColumn(name = "bottle_id", nullable = false)
    private BottleEntity bottleEntity;
}
