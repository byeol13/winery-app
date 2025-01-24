package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.CityDTO;

import java.util.List;

public interface CityServiceInterface {

    List<CityDTO> getAllCityData();
    CityDTO getCityObjectById(Integer id);
    CityDTO insertNewCityObjectData(CityDTO body);
    CityDTO updateExistingCityObjectData(CityDTO body);
    CityDTO deleteCityObjectData(Integer id);

}
