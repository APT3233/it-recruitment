package com.apt.it_rec.dto.jobdto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ApplyjobDto {
    private int job_id;
    private String name;
    private String phone;
    private String email;
    private String introduce;
    private String link_project;
    private int yoe;

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("========== Application =========\n");
        sb.append(String.format("[+] Id Job: %d\n", job_id));
        sb.append(String.format("[+] Fullname: %s\n", name));
        sb.append(String.format("[+] Phone: %s\n", phone));
        sb.append(String.format("[+] Email: %s\n", email));
        sb.append(String.format("[+] Introduce: %s\n", introduce));
        sb.append(String.format("[+] Link Project: %s\n", link_project));
        sb.append(String.format("[+] YoE: %d\n", yoe));
        sb.append("================================\n");
        return sb.toString();
    }
}
