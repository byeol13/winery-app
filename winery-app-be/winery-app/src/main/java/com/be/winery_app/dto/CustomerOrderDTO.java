package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDate;

@Getter @Setter
public class CustomerOrderDTO {
    private Integer customerOrderId;
    private Integer orderNumber;
    private LocalDate expectedDeliveryDate;
    private Timestamp timePlaced;
    private BigDecimal orderPrice;
    private CustomerDTO customerDTO;
    private StoreDTO storeDTO;
}
