package com.be.winery_app.repository;

import com.be.winery_app.entity.CustomerOrderItemsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerOrderItemsRepository extends JpaRepository<CustomerOrderItemsEntity, Integer> {
}
