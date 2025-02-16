package com.apt.it_rec.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.apt.it_rec.entity.Job;


@Repository
public interface JobRepository extends
        JpaRepository<Job, Long> 
{
    @Query("SELECT j FROM Job j WHERE j.company.companyId = :companyId")
    List<Job> findJobsByCompanyId(@Param("companyId") int companyId);

}
