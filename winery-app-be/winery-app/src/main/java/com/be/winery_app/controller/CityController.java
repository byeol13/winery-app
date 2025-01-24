package com.be.winery_app.controller;

import com.be.winery_app.dto.CityDTO;
import com.be.winery_app.service.Impl.CityServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/cities")
public class CityController {

    @Autowired
    private CityServiceImpl service;

    @GetMapping("/getAllCities")
    public List<CityDTO> getAllCities() {
        return service.getAllCityData();
    }

    @GetMapping("/getCityById")
    public CityDTO getCityById(@Validated @RequestParam(name = "cityId") Integer id) {
        return service.getCityObjectById(id);
    }

    @PostMapping("/newCity")
    public CityDTO createCity(@Validated @RequestBody CityDTO body) {
        return service.insertNewCityObjectData(body);
    }

    @PutMapping("/updateCity")
    public CityDTO updateCity(@Validated @RequestBody CityDTO body) {
        return service.updateExistingCityObjectData(body);
    }

    @DeleteMapping("/deleteCity/{id}")
    public CityDTO deleteCity(@Validated @PathVariable("id") Integer id) {
        return service.deleteCityObjectData(id);
    }
}
