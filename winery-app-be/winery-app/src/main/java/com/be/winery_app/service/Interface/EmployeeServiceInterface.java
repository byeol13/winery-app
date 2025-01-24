package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeServiceInterface {

    List<EmployeeDTO> getAllEmployeeData();
    EmployeeDTO getEmployeeObjectById(Integer id);
    EmployeeDTO insertNewEmployeeObjectData(EmployeeDTO body);
    EmployeeDTO updateExistingEmployeeObjectData(EmployeeDTO body);
    EmployeeDTO deleteEmployeeObjectData(Integer id);

}
