CREATE TABLE master_family_records (
    family_id INT AUTO_INCREMENT PRIMARY KEY,
    unique_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    mail_id VARCHAR(255) NOT NULL,
    mob_number BIGINT (10) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    age INT(2) NOT NULL,
    created_datetime DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_datetime DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE family_members (
    family_id INT AUTO_INCREMENT PRIMARY KEY,
    unique_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    relationship VARCHAR(255) NOT NULL,
    mail_id VARCHAR(255) NOT NULL,
    mob_number BIGINT (10) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    age INT(2) NOT NULL,
    created_datetime DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_datetime DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- alter table
ALTER TABLE
    Master_User
ADD
    position VARCHAR(255) NOT NULL;

-- delete row
DELETE FROM
    master_family_records
WHERE
    family_id = 2;

-- insert values
INSERT INTO
    master_family_records (
        unique_id,
        name,
        position,
        gender,
        mob_number,
        mail_id,
        age
    )
VALUES
    (
        "FID1" "Joseph",
        "father",
        "male",
        9487261448,
        "joseph@gmail.com",
        58
    );

INSERT INTO
    family_members (
        unique_id,
        name,
        relationship,
        gender,
        mob_number,
        mail_id,
        age
    )
VALUES
(
        "FID1",
        "kulandai",
        "spouse",
        "female",
        965236968,
        "kulandai@gmail.com",
        55
    );

-- inner join
SELECT
    GROUP_CONCAT(
        DISTINCT b.name
        ORDER BY
            name SEPARATOR ','
    )
FROM
    Master_User AS a
    INNER JOIN Sub_family AS b ON a.id = b.id;

-- inner join
SELECT
    *
FROM
    master_family_records as mf
    INNER JOIN family_members as fm ON mf.member_item = fm.member_item;

-- altaer column old to change a new column
ALTER TABLE
    family_members CHANGE member_item unique_id VARCHAR(255) NOT NULL;

-- update values
UPDATE
    master_family_records
SET
    relationship = 'aunty'
WHERE
    family_id BETWEEN 8
    AND 10;