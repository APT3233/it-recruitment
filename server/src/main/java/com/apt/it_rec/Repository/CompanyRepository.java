package com.apt.it_rec.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.apt.it_rec.entity.Company;
import com.apt.it_rec.entity.CompanyProfile;

@Repository
public interface CompanyRepository extends 
        JpaRepository<Company, Long>,
        JpaSpecificationExecutor<Company>
{
    // @Query("SELECT c FROM Company c JOIN FETCH c.profile")
    // List<Company> findAllWithProfile();
    
    @Query("SELECT c FROM CompanyProfile c")
    List<CompanyProfile> findAllProfile();
    
}