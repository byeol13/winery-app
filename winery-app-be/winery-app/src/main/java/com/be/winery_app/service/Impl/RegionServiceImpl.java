package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.CityDTO;
import com.be.winery_app.dto.RegionDTO;
import com.be.winery_app.entity.CityEntity;
import com.be.winery_app.entity.CountryEntity;
import com.be.winery_app.entity.RegionEntity;
import com.be.winery_app.mapper.Impl.RegionMapperImpl;
import com.be.winery_app.repository.CountryRepository;
import com.be.winery_app.repository.RegionRepository;
import com.be.winery_app.service.Interface.RegionServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class RegionServiceImpl implements RegionServiceInterface {

    @Autowired
    private RegionRepository repository;

    @Autowired
    private RegionMapperImpl mapper;

    @Autowired
    private CountryRepository countryRepository;

    @Override
    public List<RegionDTO> getAllRegionData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public RegionDTO getRegionObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public RegionDTO insertNewRegionObjectData(RegionDTO body) {
        CountryEntity countryEntity = countryRepository.findById(body.getCountryDTO().getCountryId())
                .orElseThrow(() -> new EntityNotFoundException("Country not found"));

        RegionEntity newRegionEntity = new RegionEntity();
        newRegionEntity.setRegionName(body.getRegionName());
        newRegionEntity.setCountryEntity(countryEntity);

        RegionEntity savedRegion = repository.save(newRegionEntity);

        return mapper.toDTO(savedRegion);
    }

    @Override
    public RegionDTO updateExistingRegionObjectData(RegionDTO body) {
        RegionEntity existingRegionEntity = repository.findById(body.getRegionId())
                .orElseThrow(() -> new EntityNotFoundException("Region not found"));

        CountryEntity countryEntity = countryRepository.findById(body.getCountryDTO().getCountryId())
                .orElseThrow(() -> new EntityNotFoundException("Country not found"));

        existingRegionEntity.setRegionName(body.getRegionName());
        existingRegionEntity.setCountryEntity(countryEntity);

        RegionEntity updatedRegion = repository.save(existingRegionEntity);
        return mapper.toDTO(updatedRegion);
    }

    @Override
    public RegionDTO deleteRegionObjectData(Integer id) {
        RegionDTO deleted = getRegionObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
