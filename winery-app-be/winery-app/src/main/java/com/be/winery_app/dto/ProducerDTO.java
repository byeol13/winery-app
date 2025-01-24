package com.be.winery_app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ProducerDTO {
    private Integer producerId;
    private String producerName;
    private String details;
    private RegionDTO regionDTO;
}
