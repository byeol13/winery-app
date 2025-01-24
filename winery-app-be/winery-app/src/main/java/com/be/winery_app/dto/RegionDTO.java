package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegionDTO {
    private Integer regionId;
    private String regionName;
    private CountryDTO countryDTO;
}
