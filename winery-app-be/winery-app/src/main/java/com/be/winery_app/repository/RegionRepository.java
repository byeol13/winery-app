package com.be.winery_app.repository;

import com.be.winery_app.entity.RegionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionRepository extends JpaRepository<RegionEntity, Integer> {
}
