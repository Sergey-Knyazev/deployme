DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
  empId VARCHAR(10) NOT NULL,
  empName VARCHAR(100) NOT NULL,
  agency  VARCHAR(255) NOT NULL,
  office VARCHAR(255) NOT NULL,
  languages VARCHAR(255) NOT NULL
);
