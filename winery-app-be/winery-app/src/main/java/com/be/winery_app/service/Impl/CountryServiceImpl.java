package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.CountryDTO;
import com.be.winery_app.mapper.Impl.CountryMapperImpl;
import com.be.winery_app.repository.CountryRepository;
import com.be.winery_app.service.Interface.CountryServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CountryServiceImpl implements CountryServiceInterface {

    @Autowired
    private CountryRepository repository;

    @Autowired
    private CountryMapperImpl mapper;

    @Override
    public List<CountryDTO> getAllCountryData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CountryDTO getCountryObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public CountryDTO insertNewCountryObjectData(CountryDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public CountryDTO updateExistingCountryObjectData(CountryDTO body) {
        return mapper.toDTO(repository.save(mapper.toEntity(body)));
    }

    @Override
    public CountryDTO deleteCountryObjectData(Integer id) {
        CountryDTO deleted = getCountryObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
