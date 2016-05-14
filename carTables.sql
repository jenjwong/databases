-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'cars'
-- 
-- ---

DROP TABLE IF EXISTS `cars`;
    
CREATE TABLE `cars` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `model` VARCHAR(255) NULL DEFAULT NULL,
  `brand` VARCHAR(255) NULL DEFAULT NULL,
  `id_students` INTEGER NULL DEFAULT NULL,
  `Year` YEAR NULL DEFAULT NULL,
  `color` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'students'
-- 
-- ---

DROP TABLE IF EXISTS `students`;
    
CREATE TABLE `students` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `First Name` MEDIUMTEXT(255) NULL DEFAULT NULL,
  `Last Name` MEDIUMTEXT(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `cars` ADD FOREIGN KEY (id_students) REFERENCES `students` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `cars` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `students` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `cars` (`id`,`model`,`brand`,`id_students`,`Year`,`color`) VALUES
-- ('','','','','','');
-- INSERT INTO `students` (`id`,`First Name`,`Last Name`) VALUES
-- ('','','');