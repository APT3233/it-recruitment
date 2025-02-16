package com.apt.it_rec.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apt.it_rec.Repository.CompanyRepository;
import com.apt.it_rec.Service.CompanyService;
import com.apt.it_rec.entity.CompanyProfile;

@Service
public class CompanyServiceImpl implements CompanyService{
    private final CompanyRepository companyRepository;

    @Autowired
    public CompanyServiceImpl(CompanyRepository companyRepository){
        this.companyRepository = companyRepository;
    }

    // Call Repo
    @Override
    public List<CompanyProfile> findAllCompanies() {
        return companyRepository.findAllProfile()
                .stream()
                .collect(Collectors.toList());
    }
    

}
