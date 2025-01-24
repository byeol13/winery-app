package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.InvoiceDTO;
import com.be.winery_app.dto.OrderDTO;
import com.be.winery_app.entity.*;
import com.be.winery_app.mapper.Impl.InvoiceMapperImpl;
import com.be.winery_app.repository.*;
import com.be.winery_app.service.Interface.InvoiceServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class InvoiceServiceImpl implements InvoiceServiceInterface {

    @Autowired
    private InvoiceRepository repository;

    @Autowired
    private InvoiceMapperImpl mapper;

    @Autowired
    private StoreRepository storeRepository;

    @Autowired
    private CustomerOrderRepository customerOrderRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<InvoiceDTO> getAllInvoiceData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public InvoiceDTO getInvoiceObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public InvoiceDTO insertNewInvoiceObjectData(InvoiceDTO body) {
        CustomerEntity customerEntity = customerRepository.findById(body.getCustomerDTO().getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException(("Customer not found")));

        CustomerOrderEntity customerOrderEntity = customerOrderRepository.findById(body.getCustomerOrderDTO().getCustomerOrderId())
                .orElseThrow(() -> new EntityNotFoundException("Customer Order not found"));

        StoreEntity storeEntity = storeRepository.findById(body.getStoreDTO().getStoreId())
                .orElseThrow(() -> new EntityNotFoundException("Store not found"));

        EmployeeEntity employeeEntity = employeeRepository.findById(body.getEmployeeDTO().getEmployeeId())
                .orElseThrow(() -> new EntityNotFoundException("Employee not found"));

        InvoiceEntity newInvoiceEntity = new InvoiceEntity();
        newInvoiceEntity.setInvoiceNumber(body.getInvoiceNumber());
        newInvoiceEntity.setInvoiceTotal(body.getInvoiceTotal());
        newInvoiceEntity.setTimeCreated(body.getTimeCreated());
        newInvoiceEntity.setCustomerEntity(customerEntity);
        newInvoiceEntity.setCustomerOrderEntity(customerOrderEntity);
        newInvoiceEntity.setStoreEntity(storeEntity);
        newInvoiceEntity.setEmployeeEntity(employeeEntity);

        InvoiceEntity savedInvoice = repository.save(newInvoiceEntity);

        return mapper.toDTO(savedInvoice);
    }

    @Override
    public InvoiceDTO updateExistingInvoiceObjectData(InvoiceDTO body) {
        InvoiceEntity existingInvoiceEntity = repository.findById(body.getInvoiceId())
                .orElseThrow(() -> new EntityNotFoundException("Invoice not found"));

        CustomerEntity customerEntity = customerRepository.findById(body.getCustomerDTO().getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException(("Customer not found")));

        CustomerOrderEntity customerOrderEntity = customerOrderRepository.findById(body.getCustomerOrderDTO().getCustomerOrderId())
                .orElseThrow(() -> new EntityNotFoundException("Customer Order not found"));

        StoreEntity storeEntity = storeRepository.findById(body.getStoreDTO().getStoreId())
                .orElseThrow(() -> new EntityNotFoundException("Store not found"));

        EmployeeEntity employeeEntity = employeeRepository.findById(body.getEmployeeDTO().getEmployeeId())
                .orElseThrow(() -> new EntityNotFoundException("Employee not found"));

        existingInvoiceEntity.setInvoiceNumber(body.getInvoiceNumber());
        existingInvoiceEntity.setInvoiceTotal(body.getInvoiceTotal());
        existingInvoiceEntity.setTimeCreated(body.getTimeCreated());
        existingInvoiceEntity.setCustomerEntity(customerEntity);
        existingInvoiceEntity.setCustomerOrderEntity(customerOrderEntity);
        existingInvoiceEntity.setStoreEntity(storeEntity);
        existingInvoiceEntity.setEmployeeEntity(employeeEntity);

        InvoiceEntity updatedInvoice = repository.save(existingInvoiceEntity);
        return mapper.toDTO(updatedInvoice);
    }


    @Override
    public InvoiceDTO deleteInvoiceObjectData(Integer id) {
        InvoiceDTO deleted = getInvoiceObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
