package com.be.winery_app.mapper.Interface;

import com.be.winery_app.dto.ProducerDTO;
import com.be.winery_app.entity.ProducerEntity;

public interface ProducerMapperInterface {

    ProducerDTO toDTO(ProducerEntity entity);
    ProducerEntity toEntity(ProducerDTO dto);
}
