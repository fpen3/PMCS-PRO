-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pmcsmanagement
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pmcsmanagement
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pmcsmanagement` DEFAULT CHARACTER SET latin1 ;
USE `pmcsmanagement` ;

-- -----------------------------------------------------
-- Table `pmcsmanagement`.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pmcsmanagement`.`admins` (
  `Admin_id` INT(11) NOT NULL AUTO_INCREMENT,
  `Admin_name` VARCHAR(45) NOT NULL,
  `Admin_password` VARCHAR(45) NOT NULL,
  `Admin_email` VARCHAR(45) NOT NULL,
  `Owner_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Admin_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `pmcsmanagement`.`humveetest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pmcsmanagement`.`humveetest` (
  `humvee_id` INT(11) NOT NULL AUTO_INCREMENT,
  `humvee_number` VARCHAR(45) NOT NULL,
  `humvee_color` VARCHAR(45) NOT NULL,
  `humvee_platoon` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`humvee_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `pmcsmanagement`.`lldrs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pmcsmanagement`.`lldrs` (
  `lldr_id` INT(11) NOT NULL AUTO_INCREMENT,
  `lldr_number` VARCHAR(45) NOT NULL,
  `lldr_platoon` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`lldr_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `pmcsmanagement`.`m4a1test`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pmcsmanagement`.`m4a1test` (
  `m4_id` INT(11) NOT NULL AUTO_INCREMENT,
  `m4_number` VARCHAR(45) NOT NULL,
  `m4_owner` VARCHAR(45) NOT NULL,
  `m4_owner_platoon` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`m4_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `pmcsmanagement`.`nods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pmcsmanagement`.`nods` (
  `nods_id` INT(11) NOT NULL AUTO_INCREMENT,
  `nods_number` VARCHAR(45) NOT NULL,
  `nods_platoon` VARCHAR(45) NOT NULL,
  `nods_owner` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`nods_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `pmcsmanagement`.`oe254`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pmcsmanagement`.`oe254` (
  `oe254_id` INT(11) NOT NULL AUTO_INCREMENT,
  `oe254_number` VARCHAR(45) NOT NULL,
  `oe254_platoon` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`oe254_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `pmcsmanagement`.`radios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pmcsmanagement`.`radios` (
  `radio_id` INT(11) NOT NULL AUTO_INCREMENT,
  `radio_number` VARCHAR(45) NOT NULL,
  `radio_platoon` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`radio_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `pmcsmanagement`.`tempusers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pmcsmanagement`.`tempusers` (
  `temp_User_id` INT(11) NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phoneNumber` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`temp_User_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `pmcsmanagement`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pmcsmanagement`.`users` (
  `User_id` INT(11) NOT NULL AUTO_INCREMENT,
  `User_name` VARCHAR(45) NOT NULL,
  `User_password` VARCHAR(45) NOT NULL,
  `User_email` VARCHAR(45) NOT NULL,
  `Owner_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`User_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
