package com.be.winery_app.entity;

import com.be.winery_app.dto.CityDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name = "store")
public class StoreEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer storeId;

    @Column(name = "store_name", nullable = true, unique = false)
    private String storeName;

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

    @ManyToOne
    @JoinColumn(name = "city_id", nullable = false)
    private CityEntity cityEntity;
}
