
CREATE TABLE `userlist`
(
  `id` INT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR
(20) NOT NULL,
  `age` INT UNSIGNED,
  `birthday` DATE,
  PRIMARY KEY
(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `userlist`
  (
name,
age,
birthday
)
VALUES
("lijiahai", "24", "1995-06-05");

INSERT INTO `userlist`
  (
name,
age,
birthday
)
VALUES
("liuyitong", "25", "1994-03-21");

SELECT name from userlist WHERE id=2;

-- update

UPDATE userlist SET birthday="1995-06-06" WHERE id=1;