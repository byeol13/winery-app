package com.be.winery_app.controller;

import com.be.winery_app.dto.CountryDTO;
import com.be.winery_app.service.Impl.CountryServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryServiceImpl service;

    @GetMapping("/getAllCountries")
    public List<CountryDTO> getAllCountries() {
        return service.getAllCountryData();
    }

    @GetMapping("/getCountryById")
    public CountryDTO getCountryById(@Validated @RequestParam(name = "countryId") Integer id) {
        return service.getCountryObjectById(id);
    }

    @PostMapping("/newCountry")
    public CountryDTO createCountry(@Validated @RequestBody CountryDTO body) {
        return service.insertNewCountryObjectData(body);
    }

    @PutMapping("/updateCountry")
    public CountryDTO updateCountry(@Validated @RequestBody CountryDTO body) {
        return service.updateExistingCountryObjectData(body);
    }

    @DeleteMapping("/deleteCountry/{id}")
    public CountryDTO deleteCountry(@Validated @PathVariable("id") Integer id) {
        return service.deleteCountryObjectData(id);
    }
}
