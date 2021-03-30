-- normal store procedure
DELIMITER / / CREATE PROCEDURE unique_ids_a() BEGIN
select
    *
from
    family_members;

END / / DELIMITER;

-- dynamic store procedure
DROP PROCEDURE IF EXISTS sp_fmly_map;

DELIMITER / / CREATE PROCEDURE sp_fmly_map(unique_id VARCHAR(255)) BEGIN IF unique_id = ''
OR unique_id IS NULL THEN
SELECT
    b.name
FROM
    master_family_records as a
    INNER JOIN family_members as b ON a.unique_id = b.unique_id;

ELSE
SELECT
    b.name
FROM
    master_family_records as a
    INNER JOIN family_members as b ON a.unique_id = b.unique_id
WHERE
    b.unique_id = unique_id;

END IF;

END / / DELIMITER;

CALL sp_fmly_map('FID1');

-- alter table default values
ALTER TABLE
    family_members
ADD
    unique_id VARCHAR(255) DEFAULT 'fid002';




-- preethi example employee--------------------------
CREATE TABLE Employee (
    e_no INT(3) NOT NULL,
    name VARCHAR(20) NOT NULL,
    department_name VARCHAR(10) NOT NULL,
    age INT(2) NOT NULL,
    salary INT(5),
    date_of_joining DATE
);

-- insert into
INSERT INTO
    Employee (
        e_no,
        name,
        department_name,
        age,
        salary,
        date_of_joining
    )
VALUES
    (401, 'Anu', 'IT', 34, 9000, '2016-01-23'),
    (402, 'Shane', 'Sales', 29, 8000, '2012-06-01'),
    (403, 'Rohan', 'Sales', 34, 6000, '2016-10-15'),
    (404, 'Scott', 'IT', 34, 9000, '2012-01-23'),
    (405, 'Tiger', 'Admin', 35, 8000, '2016-12-12');

-- count
SELECT
    COUNT(department_name)
FROM
    Employee;

-- group by 
SELECT
    name,
    age
FROM
    Employee
WHERE
    salary IN (
        SELECT
            salary
        FROM
            Employee
        group by
            salary
            AND age > 25
    );

-- SUM
SELECT
    SUM(salary)
FROM
    Employee;

-- asc
SELECT
    *
FROM
    Employee
ORDER BY
    name ASC;

-- >=8500
SELECT
    name,
    date_of_joining
FROM
    Employee
WHERE
    salary >= 8500;

--  exam table -2
CREATE TABLE exam (
    roll_no INT(2) NOT NULL,
    NAME VARCHAR(20) NOT NULL,
    class VARCHAR(10) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    total_marks INT(5) NOT NULL
);

INSERT INTO
    exam (
        roll_no,
        NAME,
        class,
        gender,
        total_marks
    )
VALUES
    (1, 'Nandita', 'XI', 'female', 450),
    (2, 'karunya', 'XII', 'female', 375),
    (3, 'jiyau', 'XI', 'male', 490),
    (4, 'sachin', 'XII', 'male', 479),
    (5, 'babita', 'XII', 'female', 355);

 -- q3
 SELECT NAME, class ,total_marks FROM exam WHERE NAME = 'sachin';

 -- q4
 SELECT COUNT(NAME), SUM(total_marks), class FROM exam GROUP BY class;

 -- q5
 SELECT roll_no, NAME, total_marks FROM exam WHERE total_marks BETWEEN 460 AND 480;
    
 -- length of the name q6
 SELECT NAME, LENGTH(NAME) FROM exam WHERE roll_no = 5;
 