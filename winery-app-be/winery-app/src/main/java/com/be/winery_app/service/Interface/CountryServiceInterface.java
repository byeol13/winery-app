package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.CountryDTO;

import java.util.List;

public interface CountryServiceInterface {

    List<CountryDTO> getAllCountryData();
    CountryDTO getCountryObjectById(Integer id);
    CountryDTO insertNewCountryObjectData(CountryDTO body);
    CountryDTO updateExistingCountryObjectData(CountryDTO body);
    CountryDTO deleteCountryObjectData(Integer id);
}
