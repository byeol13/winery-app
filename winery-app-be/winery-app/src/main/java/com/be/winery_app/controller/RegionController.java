package com.be.winery_app.controller;

import com.be.winery_app.dto.RegionDTO;
import com.be.winery_app.service.Impl.RegionServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/regions")
public class RegionController {

    @Autowired
    private RegionServiceImpl service;

    @GetMapping("/getAllRegions")
    public List<RegionDTO> getAllRegions() {
        return service.getAllRegionData();
    }

    @GetMapping("/getRegionById")
    public RegionDTO getRegionById(@Validated @RequestParam(name = "regionId") Integer id) {
        return service.getRegionObjectById(id);
    }

    @PostMapping("/newRegion")
    public RegionDTO createRegion(@Validated @RequestBody RegionDTO body) {
        return service.insertNewRegionObjectData(body);
    }

    @PutMapping("/updateRegion")
    public RegionDTO updateRegion(@Validated @RequestBody RegionDTO body) {
        return service.updateExistingRegionObjectData(body);
    }

    @DeleteMapping("/deleteRegion/{id}")
    public RegionDTO deleteRegion(@Validated @PathVariable("id") Integer id) {
        return service.deleteRegionObjectData(id);
    }
}
