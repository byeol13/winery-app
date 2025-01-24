package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.StoreDTO;

import java.util.List;

public interface StoreServiceInterface {

    List<StoreDTO> getAllStoreData();
    StoreDTO getStoreObjectById(Integer id);
    StoreDTO insertNewStoreObjectData(StoreDTO body);
    StoreDTO updateExistingStoreObjectData(StoreDTO body);
    StoreDTO deleteStoreObjectData(Integer id);

}
