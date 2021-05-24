DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

CREATE TABLE department (

    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(30) NOT NULL

);

CREATE TABLE role (

    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT

);

CREATE TABLE employee (

    id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT

)