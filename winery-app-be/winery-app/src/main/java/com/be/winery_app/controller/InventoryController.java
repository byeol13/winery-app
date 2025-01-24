package com.be.winery_app.controller;

import com.be.winery_app.dto.InventoryDTO;
import com.be.winery_app.service.Impl.InventoryServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/inventories")
public class InventoryController {

    @Autowired
    private InventoryServiceImpl service;

    @GetMapping("/getAllInventories")
    public List<InventoryDTO> getAllInventories() {
        return service.getAllInventoryData();
    }

    @GetMapping("/getInventoryById")
    public InventoryDTO getInventoryById(@Validated @RequestParam(name = "inventoryId") Integer id) {
        return service.getInventoryObjectById(id);
    }

    @PostMapping("/newInventory")
    public InventoryDTO createInventory(@Validated @RequestBody InventoryDTO body) {
        return service.insertNewInventoryObjectData(body);
    }

    @PutMapping("/updateInventory")
    public InventoryDTO updateInventory(@Validated @RequestBody InventoryDTO body) {
        return service.updateExistingInventoryObjectData(body);
    }

    @DeleteMapping("/deleteInventory/{id}")
    public InventoryDTO deleteInventory(@Validated @PathVariable("id") Integer id) {
        return service.deleteInventoryObjectData(id);
    }
}
