package com.apt.it_rec.utils;

import com.fasterxml.jackson.databind.ObjectMapper;

public class Utils {

    public String convertToValidJson(String value) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            objectMapper.readTree(value);
            return value;
        } catch (Exception e) {
            return "{\"value\": \"" + value + "\"}";
        }
    }
}
