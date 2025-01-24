package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.BottleDTO;

import java.util.List;

public interface BottleServiceInterface {

    List<BottleDTO> getAllBottleData();
    BottleDTO getBottleObjectById(Integer id);
    BottleDTO insertNewBottleObjectData(BottleDTO body);
    BottleDTO updateExistingBottleObjectData(BottleDTO body);
    BottleDTO deleteBottleObjectData(Integer id);

}
