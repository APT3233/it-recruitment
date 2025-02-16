package com.apt.it_rec.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "company_profile")
public class CompanyProfile {
    @Id
    @Column(name = "company_id")
    private Integer companyId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id", referencedColumnName = "company_id", 
                insertable = false, updatable = true)
    @JsonBackReference
    private Company company;

    @Column(name = "name", nullable = false, length = 75)
    private String name;

    @Column(name = "phone", nullable = false, length = 15)
    private String phone;

    @Column(name = "email", nullable = false, length = 255)
    private String email;

    @Column(name = "quanity_job")
    private Integer quanityJob;

    @Column(name = "quanity_cv")
    private Integer quanityCv;

    @Column(name = "quanity_staff")
    private Integer quanityStaff;

    @Column(name= "description", columnDefinition = "TEXT")
    private String description;
}