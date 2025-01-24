package com.be.winery_app.entity;

import com.be.winery_app.dto.BottleDTO;
import com.be.winery_app.dto.InvoiceDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
@Entity
@Table(name = "invoice_item")
public class InvoiceItemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer invoiceItemId;

    @Column(name = "quantity", nullable = true, unique = false)
    private Integer quantity;

    @Column(name = "item_price", nullable = true, unique = false)
    private BigDecimal itemPrice;

    @ManyToOne
    @JoinColumn(name = "invoice_id", nullable = false)
    private InvoiceEntity invoiceEntity;

    @ManyToOne
    @JoinColumn(name = "bottle_id", nullable = false)
    private BottleEntity bottleEntity;
}
