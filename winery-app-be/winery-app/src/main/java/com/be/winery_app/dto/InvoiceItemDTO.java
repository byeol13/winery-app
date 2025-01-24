package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
public class InvoiceItemDTO {
    private Integer invoiceItemId;
    private Integer quantity;
    private BigDecimal itemPrice;
    private InvoiceDTO invoiceDTO;
    private BottleDTO bottleDTO;
}
