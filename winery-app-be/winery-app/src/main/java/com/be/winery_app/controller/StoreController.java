package com.be.winery_app.controller;

import com.be.winery_app.dto.StoreDTO;
import com.be.winery_app.service.Impl.StoreServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/stores")
public class StoreController {

    @Autowired
    private StoreServiceImpl service;

    @GetMapping("/getAllStores")
    public List<StoreDTO> getAllStores() {
        return service.getAllStoreData();
    }

    @GetMapping("/getStoreById")
    public StoreDTO getStoreById(@Validated @RequestParam(name = "storeId") Integer id) {
        return service.getStoreObjectById(id);
    }

    @PostMapping("/newStore")
    public StoreDTO createStore(@Validated @RequestBody StoreDTO body) {
        return service.insertNewStoreObjectData(body);
    }

    @PutMapping("/updateStore")
    public StoreDTO updateStore(@Validated @RequestBody StoreDTO body) {
        return service.updateExistingStoreObjectData(body);
    }

    @DeleteMapping("/deleteStore/{id}")
    public StoreDTO deleteStore(@Validated @PathVariable("id") Integer id) {
        return service.deleteStoreObjectData(id);
    }
}
