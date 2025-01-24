package com.be.winery_app.repository;

import com.be.winery_app.entity.ProducerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProducerRepository extends JpaRepository<ProducerEntity, Integer> {
}
