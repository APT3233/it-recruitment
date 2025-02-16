package com.apt.it_rec.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apt.it_rec.Repository.JobRepository;
import com.apt.it_rec.Service.JobService;
import com.apt.it_rec.entity.Job;

@Service
public class JobServiceImpl implements JobService{
    private final JobRepository jobRepository;
    
    @Autowired
    public  JobServiceImpl(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public List<Job> getJobById(int id) {
        return jobRepository.findJobsByCompanyId(id);
    }

    @Override
    public List<Job> getAllJob() {
        return jobRepository.findAll();
    }
}
