package com.apt.it_rec.Service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apt.it_rec.Repository.CvRepository;
import com.apt.it_rec.Repository.JobRepository;
import com.apt.it_rec.Service.CvService;
import com.apt.it_rec.dto.jobdto.ApplyjobDto;
import com.apt.it_rec.entity.CV;
import com.apt.it_rec.entity.Job;

@Service
public class CvServiceImpl implements CvService {
    @Autowired
    private CvRepository cvRepository;
    private JobRepository jobRepository;

    @Autowired
    public CvServiceImpl(CvRepository cvRepository, JobRepository jobRepository) {
        this.cvRepository = cvRepository;
        this.jobRepository = jobRepository;
    }

    @Override
    public void creatCvFromDto(ApplyjobDto applyjob) {
        CV newCv = convertToCv(applyjob);
        cvRepository.save(newCv);
    }
    private CV convertToCv(ApplyjobDto applyJob) {
        Job job = jobRepository.findById((long) applyJob.getJob_id()).orElse(null);

        return new CV(job, applyJob.getName(), applyJob.getPhone(),
                    applyJob.getEmail(), applyJob.getIntroduce(),
                    applyJob.getLink_project(), applyJob.getYoe());
    }

    
}
