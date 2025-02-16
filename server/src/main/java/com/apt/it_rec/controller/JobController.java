package com.apt.it_rec.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apt.it_rec.Service.CvService;
import com.apt.it_rec.Service.JobService;
import com.apt.it_rec.dto.jobdto.ApplyjobDto;
import com.apt.it_rec.entity.CV;
import com.apt.it_rec.entity.Job;

@RestController
@RequestMapping("/api")
public class JobController {
    private JobService jobService;
    private CvService cvService;

    public JobController(JobService jobService, CvService cvsService) {
        this.jobService = jobService;
        this.cvService = cvsService;
    }

    @GetMapping("/job")
    public ResponseEntity<List<Job>> getAllJobs() {
        try {
            List<Job> jobs = jobService.getAllJob();
            return ResponseEntity.ok(jobs);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(null);
        }
    }

    @PostMapping("/apply-job")
    public ResponseEntity<Map<String, Object>> applyJobForm(@RequestBody ApplyjobDto applyJob) {
        try {
            System.out.println(applyJob.toString());
            cvService.creatCvFromDto(applyJob);

            Map<String, Object> response = new HashMap<>();
            response.put("message", "CV created successfully");
            response.put("status", "ok");
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Error creating CV");
            response.put("status", "error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}
