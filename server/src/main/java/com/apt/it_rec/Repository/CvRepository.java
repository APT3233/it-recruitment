package com.apt.it_rec.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apt.it_rec.entity.CV;

@Repository
public interface CvRepository extends JpaRepository<CV, Long>{
    
}
