package com.be.winery_app.controller;

import com.be.winery_app.dto.EmployeeDTO;
import com.be.winery_app.service.Impl.EmployeeServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeServiceImpl service;

    @GetMapping("/getAllEmployees")
    public List<EmployeeDTO> getAllEmployees() {
        return service.getAllEmployeeData();
    }

    @GetMapping("/getEmployeeById")
    public EmployeeDTO getEmployeeById(@Validated @RequestParam(name = "employeeId") Integer id) {
        return service.getEmployeeObjectById(id);
    }

    @PostMapping("/newEmployee")
    public EmployeeDTO createEmployee(@Validated @RequestBody EmployeeDTO body) {
        return service.insertNewEmployeeObjectData(body);
    }

    @PutMapping("/updateEmployee")
    public EmployeeDTO updateEmployee(@Validated @RequestBody EmployeeDTO body) {
        return service.updateExistingEmployeeObjectData(body);
    }

    @DeleteMapping("/deleteEmployee/{id}")
    public EmployeeDTO deleteEmployee(@Validated @PathVariable("id") Integer id) {
        return service.deleteEmployeeObjectData(id);
    }
}
