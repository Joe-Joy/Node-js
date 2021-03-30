CREATE TABLE master_family_records (
    family_id INT AUTO_INCREMENT PRIMARY KEY,
    unique_id VARCHAR(255) NOT NULL ,
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
ALTER TABLE Master_User ADD position VARCHAR(255) NOT NULL;

-- delete row
DELETE FROM master_family_records WHERE family_id = 2;

-- insert values
INSERT INTO Master_User (name, head, gender, mob_number, mail_id)
VALUES (
        "Joseph",
        "head of the  house",
        "male",
        9487261448,
        "joseph@gmail.com"
    );

INSERT INTO Sub_family (id,name,gender,mob_number,mail_id, relationship )
VALUES(
        1,
        "kulandai",
        "female",
        965236968,
        "kulandai@gmail.com",
        "spouse"
    );

-- inner join
SELECT
    GROUP_CONCAT(
        DISTINCT b.name
        ORDER BY
            name SEPARATOR ','
    )
FROM Master_User AS a INNER JOIN Sub_family AS b ON a.id = b.id;

-- inner join
SELECT * FROM master_family_records as mf
INNER JOIN family_members as fm ON mf.member_item = fm.member_item;

-- altaer column old to change a new column
ALTER TABLE family_members CHANGE member_item unique_id VARCHAR(255) NOT NULL;

-- update values
UPDATE master_family_records
SET relationship = 'aunty'
WHERE family_id BETWEEN 8 AND 10;





