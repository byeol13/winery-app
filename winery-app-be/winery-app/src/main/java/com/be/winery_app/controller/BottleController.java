package com.be.winery_app.controller;

import com.be.winery_app.dto.BottleDTO;
import com.be.winery_app.service.Impl.BottleServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/bottles")
public class BottleController {

    @Autowired
    private BottleServiceImpl service;

    @GetMapping("/getAllBottles")
    public List<BottleDTO> getAllBottles() {
        return service.getAllBottleData();
    }

    @GetMapping("/getBottleById")
    public BottleDTO getBottleById(@Validated @RequestParam(name = "bottleId") Integer id) {
        return service.getBottleObjectById(id);
    }

    @PostMapping("/newBottle")
    public BottleDTO createBottle(@Validated @RequestBody BottleDTO body) {
        return service.insertNewBottleObjectData(body);
    }

    @PutMapping("/updateBottle")
    public BottleDTO updateBottle(@Validated @RequestBody BottleDTO body) {
        return service.updateExistingBottleObjectData(body);
    }

    @DeleteMapping("/deleteBottle/{id}")
    public BottleDTO deleteBottle(@Validated @PathVariable("id") Integer id) {
        return service.deleteBottleObjectData(id);
    }
}
