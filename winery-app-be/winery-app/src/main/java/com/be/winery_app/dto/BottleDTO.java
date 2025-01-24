package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
public class BottleDTO {
    private Integer bottleId;
    private String fullName;
    private String label;
    private BigDecimal volume;
    private Integer yearProduced;
    private String picture;
    private BigDecimal alcoholPercentage;
    private BigDecimal currentPrice;
    private CategoryDTO categoryDTO;
    private ProducerDTO producerDTO;
}
