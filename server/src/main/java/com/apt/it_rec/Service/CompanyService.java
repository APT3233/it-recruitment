package com.apt.it_rec.Service;


import com.apt.it_rec.entity.CompanyProfile;

import java.util.List;

public interface CompanyService {
    List<CompanyProfile> findAllCompanies();
}
