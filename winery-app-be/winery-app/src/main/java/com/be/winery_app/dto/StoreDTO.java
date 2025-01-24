package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class StoreDTO {
    private Integer storeId;
    private String storeName;
    private String address;
    private String phone;
    private String mobile;
    private String email;
    private String details;
    private CityDTO cityDTO;
}
