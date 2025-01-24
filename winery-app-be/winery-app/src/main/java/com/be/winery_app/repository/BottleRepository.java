package com.be.winery_app.repository;

import com.be.winery_app.entity.BottleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BottleRepository extends JpaRepository<BottleEntity, Integer> {
}
