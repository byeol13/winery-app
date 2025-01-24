package com.be.winery_app.service.Impl;

import com.be.winery_app.dto.InventoryDTO;
import com.be.winery_app.dto.InvoiceItemDTO;
import com.be.winery_app.entity.*;
import com.be.winery_app.mapper.Impl.InvoiceItemMapperImpl;
import com.be.winery_app.repository.BottleRepository;
import com.be.winery_app.repository.InvoiceItemRepository;
import com.be.winery_app.repository.InvoiceRepository;
import com.be.winery_app.service.Interface.InvoiceItemServiceInterface;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class InvoiceItemServiceImpl implements InvoiceItemServiceInterface {

    @Autowired
    private InvoiceItemRepository repository;

    @Autowired
    private InvoiceItemMapperImpl mapper;

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private BottleRepository bottleRepository;

    @Override
    public List<InvoiceItemDTO> getAllInvoiceItemData() {
        return repository.findAll().stream().map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public InvoiceItemDTO getInvoiceItemObjectById(Integer id) {
        return repository.findById(id).map(mapper::toDTO)
                .orElse(null);
    }

    @Override
    public InvoiceItemDTO insertNewInvoiceItemObjectData(InvoiceItemDTO body) {
        InvoiceEntity invoiceEntity = invoiceRepository.findById(body.getInvoiceDTO().getInvoiceId())
                .orElseThrow(() -> new EntityNotFoundException("Invoice not found"));

        BottleEntity bottleEntity = bottleRepository.findById(body.getBottleDTO().getBottleId())
                .orElseThrow(() -> new EntityNotFoundException("Bottle not found"));

        InvoiceItemEntity newInvoiceItemEntity = new InvoiceItemEntity();
        newInvoiceItemEntity.setQuantity(body.getQuantity());
        newInvoiceItemEntity.setItemPrice(body.getItemPrice());
        newInvoiceItemEntity.setInvoiceEntity(invoiceEntity);
        newInvoiceItemEntity.setBottleEntity(bottleEntity);

        InvoiceItemEntity savedInvoiceItem = repository.save(newInvoiceItemEntity);

        return mapper.toDTO(savedInvoiceItem);
    }

    @Override
    public InvoiceItemDTO updateExistingInvoiceItemObjectData(InvoiceItemDTO body) {
        InvoiceItemEntity existingInvoiceItemEntity = repository.findById(body.getInvoiceItemId())
                .orElseThrow(() -> new EntityNotFoundException("Invoice Item not found"));

        InvoiceEntity invoiceEntity = invoiceRepository.findById(body.getInvoiceDTO().getInvoiceId())
                .orElseThrow(() -> new EntityNotFoundException("Invoice not found"));

        BottleEntity bottleEntity = bottleRepository.findById(body.getBottleDTO().getBottleId())
                .orElseThrow(() -> new EntityNotFoundException("Bottle not found"));

        existingInvoiceItemEntity.setQuantity(body.getQuantity());
        existingInvoiceItemEntity.setItemPrice(body.getItemPrice());
        existingInvoiceItemEntity.setInvoiceEntity(invoiceEntity);
        existingInvoiceItemEntity.setBottleEntity(bottleEntity);

        InvoiceItemEntity updatedInvoiceItem = repository.save(existingInvoiceItemEntity);
        return mapper.toDTO(updatedInvoiceItem);
    }

    @Override
    public InvoiceItemDTO deleteInvoiceItemObjectData(Integer id) {
        InvoiceItemDTO deleted = getInvoiceItemObjectById(id);
        repository.deleteById(id);
        return deleted;
    }
}
