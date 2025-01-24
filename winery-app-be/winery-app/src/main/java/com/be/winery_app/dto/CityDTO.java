package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CityDTO {
    private Integer cityId;
    private String postalCode;
    private String cityName;
    private CountryDTO countryDTO;
}
