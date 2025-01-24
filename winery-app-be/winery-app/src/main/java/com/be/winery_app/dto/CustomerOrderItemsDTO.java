package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
public class CustomerOrderItemsDTO {
    private Integer customerOrderItemId;
    private Integer quantity;
    private BigDecimal orderPrice;
    private CustomerOrderDTO customerOrderDTO;
    private BottleDTO bottleDTO;
}
