package com.be.winery_app.controller;

import com.be.winery_app.dto.ProducerDTO;
import com.be.winery_app.service.Impl.ProducerServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/producers")
public class ProducerController {

    @Autowired
    private ProducerServiceImpl service;

    @GetMapping("/getAllProducers")
    public List<ProducerDTO> getAllProducers() {
        return service.getAllProducerData();
    }

    @GetMapping("/getProducerById")
    public ProducerDTO getProducerById(@Validated @RequestParam(name = "producerId") Integer id) {
        return service.getProducerObjectById(id);
    }

    @PostMapping("/newProducer")
    public ProducerDTO createProducer(@Validated @RequestBody ProducerDTO body) {
        return service.insertNewProducerObjectData(body);
    }

    @PutMapping("/updateProducer")
    public ProducerDTO updateProducer(@Validated @RequestBody ProducerDTO body) {
        return service.updateExistingProducerObjectData(body);
    }

    @DeleteMapping("/deleteCustomer/{id}")
    public ProducerDTO deleteProducer(@Validated @PathVariable("id") Integer id) {
        return service.deleteProducerObjectData(id);
    }
}
