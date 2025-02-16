-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: apt_web_it_rec_db
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.24.04.1

--
-- Table structure for table `company`
--
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `company_id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `username` VARCHAR(125) NOT NULL, 
  `password` VARCHAR(125) NOT NULL,
  `role` VARCHAR(50) DEFAULT 'company' NOT NULL
)

--
-- Table structure for table `company_profile`
--
DROP TABLE IF EXISTS `company_profile`;
CREATE TABLE `company_profile` (
  `company_id` INT,
  `name` VARCHAR(75) NOT NULL,
  `phone` CHAR(15) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `quanity_staff` SMALLINT UNSIGNED,
  `quanity_job` SMALLINT UNSIGNED,
  `quanity_cv` SMALLINT UNSIGNED,
  CONSTRAINT `company_profile_fk` FOREIGN KEY (`company_id`) REFERENCES `company`(`company_id`) ON DELETE SET NULL,
)

--
-- Table structure for table `job`
--
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job` (
  `job_id` INT AUTO_INCREMENT PRIMARY KEY,
  `company_id` INT,
  `name` VARCHAR(255) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `salary` INT NOT NULL,
  `status` CHAR(20) DEFAULT 'Inactive', 
  `language` JSON,
  `timePost` DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `job_fk` FOREIGN KEY (`company_id`) REFERENCES `company`(`company_id`) ON DELETE CASCADE
)

--
-- Table structure for table `cv`
--
DROP TABLE IF EXISTS `cv`;
CREATE TABLE `cv` (
  `cv_id` INT PRIMARY KEY AUTO_INCREMENT,
  `job_id` INT,
  `status` CHAR(20) DEFAULT 'Pending',
  `name` VARCHAR(255) NOT NULL,
  `phone` CHAR(20) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `introduce` TEXT NOT NULL,
  `linkProject` JSON,
  `yoe` SMALLINT,
  `time` DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `cv_fk` FOREIGN KEY `job_id` REFERENCES `job`(`job_id`) ON DELETE SET NULL
);