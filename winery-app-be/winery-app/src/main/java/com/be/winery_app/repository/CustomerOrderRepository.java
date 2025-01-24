package com.be.winery_app.repository;

import com.be.winery_app.entity.CustomerOrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerOrderRepository extends JpaRepository<CustomerOrderEntity, Integer> {
}
