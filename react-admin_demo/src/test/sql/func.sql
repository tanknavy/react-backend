#随机产生多个数字
DELIMITER $$ #临时定义
DROP FUNCTION IF EXISTS `rand_num`$$ #提交删除函数

CREATE DEFINER=`root`@`localhost` FUNCTION `rand_num`(from_num INT, to_num INT) RETURN INT(11) 
BEGIN
    DECLARE i INT DEFAULT 0;
    SET i = FLOOR(from_num + RAND() *(to_num - from_num))
    RETURN i;
END$$ #提交
DELIMITER; #恢复原先的限定符


DELIMITER $$

drop function if exists `rand_nums`$$

create DEFINER=`root`@`localhost` function `rand_nums`(from_num int, to_nun int, n int, delemit varchar(20)) return varcha(255) charset utf8
BEGIN
    declare i int default 0;
    declare v int default 0;
    declare return_str varchar(255) default '';
    while i < n do
        SET v = rand_num(from_num, to_num);
        SET return_str=CONCAT(return_str,v);
        IF LENGTH(return_str) > 0 THEN
            SET return_str=concat(return_str, delemit);
        END IF;
        SET i = i + 1;
    END WHILE;
    RETURN return_str; 
END$$

DELIMITER ;