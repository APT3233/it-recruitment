package com.apt.it_rec.Service;

import java.util.List;
import com.apt.it_rec.entity.Job;

public interface JobService {

    List<Job> getJobById(int id);
    List<Job> getAllJob();
} 