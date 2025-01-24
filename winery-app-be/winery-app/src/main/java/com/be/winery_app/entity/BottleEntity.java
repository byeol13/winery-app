package com.be.winery_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
@Entity
@Table(name = "bottle")
public class BottleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer bottleId;

    @Column(name = "full_name", nullable = true, unique = false)
    private String fullName;

    @Column(name = "label", nullable = true, unique = false)
    private String label;

    @Column(name = "volume", nullable = true, unique = false)
    private BigDecimal volume;

    @Column(name = "year_produced", nullable = true, unique = false)
    private Integer yearProduced;

    @Column(name = "picture", nullable = true, unique = false)
    private String picture;

    @Column(name = "alcohol_percentage", nullable = true, unique = false)
    private BigDecimal alcoholPercentage;

    @Column(name = "current_price", nullable = true, unique = false)
    private BigDecimal currentPrice;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private CategoryEntity categoryEntity;

    @ManyToOne
    @JoinColumn(name = "producer_id", nullable = false)
    private ProducerEntity producerEntity;
}
