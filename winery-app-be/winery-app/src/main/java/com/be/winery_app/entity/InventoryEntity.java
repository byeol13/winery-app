package com.be.winery_app.entity;

import com.be.winery_app.dto.BottleDTO;
import com.be.winery_app.dto.StoreDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name = "inventory")
public class InventoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer inventoryId;

    @Column(name = "quantity", nullable = true, unique = false)
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "store_id", nullable = false)
    private StoreEntity storeEntity;

    @ManyToOne
    @JoinColumn(name = "bottle_id", nullable = false)
    private BottleEntity bottleEntity;
}
