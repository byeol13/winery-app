package com.be.winery_app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name = "city")
public class CityEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer cityId;

    @Column(name = "postal_code", nullable = true, unique = false)
    private String postalCode;

    @Column(name = "city_name", nullable = true, unique = false)
    private String cityName;

    @ManyToOne
    @JoinColumn(name = "country_id", nullable = false)
    private CountryEntity countryEntity;
}
