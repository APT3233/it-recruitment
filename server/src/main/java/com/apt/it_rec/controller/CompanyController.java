package com.apt.it_rec.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.apt.it_rec.Service.CompanyService;
import com.apt.it_rec.Service.JobService;
import com.apt.it_rec.entity.CompanyProfile;
import com.apt.it_rec.entity.Job;

@RestController
@RequestMapping("/api/companies")                                      
public class CompanyController {
    private CompanyService companyService;
    private JobService jobService;

    @Autowired
    public CompanyController(CompanyService companyService,
            JobService jobService) {
        this.companyService = companyService;
        this.jobService = jobService;
    }

    @GetMapping("") 
    public ResponseEntity<List<CompanyProfile>> getAllCompanies() {
        try {
            List<CompanyProfile> companies = companyService.findAllCompanies();

            return ResponseEntity.ok(companies);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(null);

        }
    }
    @GetMapping("/{id}") 
    public ResponseEntity<List<Job>> getJobDetailById(@PathVariable("id") int companyId) {
        try {
            System.out.println("ID: "+ companyId);
            List<Job> jobs = jobService.getJobById(companyId);
            if (jobs.isEmpty()) {
                return ResponseEntity.noContent().build(); 
            }
            return ResponseEntity.ok(jobs);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
    
}
