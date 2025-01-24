package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.ProducerDTO;

import java.util.List;

public interface ProducerServiceInterface {

    List<ProducerDTO> getAllProducerData();
    ProducerDTO getProducerObjectById(Integer id);
    ProducerDTO insertNewProducerObjectData(ProducerDTO body);
    ProducerDTO updateExistingProducerObjectData(ProducerDTO body);
    ProducerDTO deleteProducerObjectData(Integer id);
}
