
-- store procedure
DELIMITER / / CREATE PROCEDURE unique_ids_a() BEGIN
select
    *
from
    family_members;

END / / DELIMITER;




DROP PROCEDURE IF EXISTS sp_fmly_map;
DELIMITER //
CREATE PROCEDURE sp_fmly_map(unique_id VARCHAR(255))
BEGIN
   IF unique_id = '' OR unique_id IS NULL THEN 
	  SELECT b.name FROM master_family_records as a 
      INNER JOIN family_members as b ON a.unique_id = b.unique_id;
   ELSE 
	 SELECT b.name FROM master_family_records as a
	 INNER JOIN family_members as b ON a.unique_id = b.unique_id WHERE b.unique_id = unique_id;
   END IF;
END //
DELIMITER ;
CALL sp_fmly_map('FID1');

-- alter table default values
ALTER TABLE
    family_members
ADD
    unique_id VARCHAR(255) DEFAULT 'fid002';