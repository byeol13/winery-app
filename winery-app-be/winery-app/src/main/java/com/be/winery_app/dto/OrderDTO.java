package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDate;

@Getter @Setter
public class OrderDTO {
    private Integer orderId;
    private String orderNumber;
    private Timestamp expectedDeliveryDate;
    private Timestamp timePlaced;
    private Timestamp timeCanceled;
    private Timestamp timeDelivered;
    private BigDecimal orderPrice;
    private SupplierDTO supplierDTO;
    private StoreDTO storeDTO;
    private EmployeeDTO employeeDTO;
}
