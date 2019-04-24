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


INSERT INTO `names`(`id`, `firstname`, `lastname`) VALUES (1, 'Trish', 'Balinda');
INSERT INTO `names`(`id`, `firstname`, `lastname`) VALUES (2, 'Thomoas', 'Kitty');
INSERT INTO `names`(`id`, `firstname`, `lastname`) VALUES (3, 'Sheila', 'Donner');

INSERT INTO `stats`(`personId`, `height`, `weight`, `age`) VALUES (1, 70, 160, 24);
INSERT INTO `stats`(`personId`, `height`, `weight`, `age`) VALUES (2, 69, 170, 44);
INSERT INTO `stats`(`personId`, `height`, `weight`, `age`) VALUES (3, 73, 127, 27);
