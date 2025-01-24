package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
public class OrderItemDTO {
    private Integer orderItemId;
    private Integer quantity;
    private BigDecimal orderPrice;
    private OrderDTO orderDTO;
    private BottleDTO bottleDTO;
}
