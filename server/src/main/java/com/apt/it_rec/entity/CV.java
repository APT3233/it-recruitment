package com.apt.it_rec.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

import com.apt.it_rec.utils.Utils;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "cv")
public class CV {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cv_id")
    private Integer cvId;

    @ManyToOne
    @JoinColumn(name = "job_id", nullable = true)
    private Job job;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "phone", nullable = false, length = 20)
    private String phone;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "introduce", nullable = false, columnDefinition = "TEXT")
    private String introduce;

    @Column(name = "link_project", columnDefinition = "JSON")
    private String linkProject;

    @Column(name = "yoe")
    private int yoe;

    @Column(name = "time", columnDefinition = "DATETIME")
    private LocalDateTime time;

    public CV(Job job_id, String name, String phone, String email, String introduce, String linkProject, int yoe) {
        this.job = job_id; 
        this.status = "Pending";
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.introduce = introduce;
        setLinkProject(linkProject);
        this.yoe = yoe;
        this.time = LocalDateTime.now(); 
    }
    public void setLinkProject(String linkProject) {
        Utils utils = new Utils();
        this.linkProject = utils.convertToValidJson(linkProject); 
    }


}
