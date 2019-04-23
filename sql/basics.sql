CREATE TABLE `comparablepeople_db` . `names`( 
`id` INT(10) NOT NULL AUTO_INCREMENT ,
`firstname` VARCHAR(255) NOT NULL , 
`lastname` VARCHAR(255) NOT NULL , 
PRIMARY KEY (`id`)) ENGINE = InnoDB;

-- -------------------------------------------------------------------------------------- --

CREATE TABLE `comparablepeople_db` . `stats`( 
`personId` INT(10) NOT NULL ,
`height` INT(10) NOT NULL , 
`weight` INT(10) NOT NULL , 
`age` INT(10) NOT NULL ,
PRIMARY KEY (`personId`)) ENGINE = InnoDB;