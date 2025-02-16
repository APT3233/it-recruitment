package com.apt.it_rec.controller;

import com.apt.it_rec.dto.authdto.LoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @PostMapping("/login")
    ResponseEntity<?> login(@RequestBody LoginRequest req){
        System.out.printf("username: %s\nPassword: %s",req.getUsername(), req.getPassword());
        return ResponseEntity.ok("Admin hello nhe");
    }
}
