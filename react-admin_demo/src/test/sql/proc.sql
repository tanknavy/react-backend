## mysql中循环 
#1) [begin_label:] LOOP         END LOOP   [end_label] #在loop循环体中需要判断何时跳出循环,可以IF THEN ITERATE, END IF, LEAVE label
#2) [begin_label:] REPEAT UNTIL END REPEAT [end_label] #先做一次再判断，类似do while
#3) [begin_label:] WHILE ... DO END WHILE  [end_label] #先判断再做


DELIMITER $$
DROP PROCEDURE IF EXIST `insert_sku`$$;
CREATE DEFINER=`root`@`localhost PROCEDURE `insert_sku`(create_time_string VARCHAR(255), max_num INT)
BEGIN
    DECLARE v_create_time DATETIME DEFAULT NULL;
    DECLARE i INT DEFAULT 0;
    SET autocommit = 0;
    REPEAT
        SET i = i + 1;
        SET v_create_time=DATE_ADD(DATE_FORMAT(create_time_string, '%Y-%m-%d'), INTERVAL rand_num(1,3600*24) SECOND);
        INSERT INTO sku_info (spu_id,price,sku_name,sku_desc,weight,tm_id,category3_id,sku_default_img,create_time  ) 
        VALUES (rand_num(1,1000) ,rand_num(10,5000) , rand_string(20), rand_string(30),CAST(rand_num(50,500) AS DECIMAL(10,2))/100.0  ,rand_num(1,100),  rand_num(1,5000),CONCAT('http://',rand_string(40)), v_create_time    ); 
    UNTIL i = max_num 
    END REPEAT;
COMMIT;   
END$$

DELIMITER;
