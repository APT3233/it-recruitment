package com.apt.it_rec.entity;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "job")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id")
    private Integer jobId;

    @ManyToOne(fetch = FetchType.LAZY) 
    @JoinColumn(name = "company_id", nullable = false)
    @JsonBackReference
    private Company company;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "salary", nullable = false)
    private Integer salary;

    @Column(name = "status", nullable = false)
    @ColumnDefault("'Inactive'")
    private String status;

    @Column(name = "language", columnDefinition = "JSON")
    private String language;

    @Column(name = "timePost", columnDefinition = "DATETIME") 
    @CreationTimestamp
    private LocalDateTime timePost;
}
