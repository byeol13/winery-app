package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.BottleDTO;
import com.be.winery_app.dto.CityDTO;
import com.be.winery_app.entity.*;
import com.be.winery_app.mapper.Impl.CityMapperImpl;
import com.be.winery_app.repository.CityRepository;
import com.be.winery_app.repository.CountryRepository;
import com.be.winery_app.service.Interface.CityServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CityServiceImpl implements CityServiceInterface {

    @Autowired
    private CityRepository repository;

    @Autowired
    private CityMapperImpl mapper;

    @Autowired
    private CountryRepository countryRepository;

    @Override
    public List<CityDTO> getAllCityData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CityDTO getCityObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public CityDTO insertNewCityObjectData(CityDTO body) {
        CountryEntity countryEntity = countryRepository.findById(body.getCountryDTO().getCountryId())
                .orElseThrow(() -> new EntityNotFoundException("Country not found"));

        CityEntity newCityEntity = new CityEntity();
        newCityEntity.setCityName(body.getCityName());
        newCityEntity.setPostalCode(body.getPostalCode());
        newCityEntity.setCountryEntity(countryEntity);

        CityEntity savedCity = repository.save(newCityEntity);

        return mapper.toDTO(savedCity);
    }

    @Override
    public CityDTO updateExistingCityObjectData(CityDTO body) {
        CityEntity existingCityEntity = repository.findById(body.getCityId())
                .orElseThrow(() -> new EntityNotFoundException("City not found"));

        CountryEntity countryEntity = countryRepository.findById(body.getCountryDTO().getCountryId())
                .orElseThrow(() -> new EntityNotFoundException("Country not found"));

        existingCityEntity.setCityName(body.getCityName());
        existingCityEntity.setPostalCode(body.getPostalCode());
        existingCityEntity.setCountryEntity(countryEntity);

        CityEntity updatedCity = repository.save(existingCityEntity);
        return mapper.toDTO(updatedCity);
    }

    @Override
    public CityDTO deleteCityObjectData(Integer id) {
        CityDTO deleted = getCityObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
