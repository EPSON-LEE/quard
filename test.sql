CREATE TABLE `user_info`(
  `id` INT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `age` INT UNSIGNED,
  `birthday` DATE,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user_info`
  (name, age, birthday)
VALUES
  ("lijiahai", "24", "1995-06-05");

INSERT INTO `user_info`
  (
name,
age,
birthday
)
VALUES
("liuyitong", "25", "1993-03-21");

CREATE TABLE `user_info`
(
  `id` INT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR
(20) NOT NULL,
  `age` INT UNSIGNED,
  `birthday` DATE,
  PRIMARY KEY
(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- LINK 语句
SELECT * FROM userlist WHERE name LIKE '%hao'

-- UNION 操作符

