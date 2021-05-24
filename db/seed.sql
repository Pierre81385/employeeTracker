USE company_db;

INSERT INTO department (name) VALUES
("Sales"),
("IT/Engineering"),
("Legal");

INSERT INTO role (title, salary, department_id) VALUES
("Sales Associate", 40000, 1),
("Engineer", 90000, 2),
("Lawyer", 80000, 3),
("Sales Manager", 60000, 1),
("Lead Engineer", 140000, 2),
("Lead Attorney", 100000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("David", "White", 1, 1),
("Jessica", "Daniels", 2, 2),
("Alison", "Green", 3, 3),
("Colin", "Joyce", 1, null),
("Peter", "Bishop", 2, null),
("Leslie", "Thurman", 3, null);