##里面语句可以看到外面的table,所以使用外表驱动内表(子查询)，这种情况下有in和exits两种情况，
##内外表驱动不同于join关联的并行两个表，in/exists是逐条记录比较的；
##小表驱动达标用in,not in,<>，因为in遍历外表的全部数据，去皮面子查询的结果集，
##像两层for循环，但结果是唯一的，in是在内存中比较；
##大表驱动小表用exists(子查询)，每次判断外表中的每条记录和内表关系是否满足true， exists是执行数据库查询操作

# 去除一个表中重复的行emp(id,name,dept),id唯一，name&dept有重复记录
SELECT
	*
FROM
	emp AS ta
WHERE
	ta.id in (
		SELECT
			max(tb.id) AS maxid
		FROM
			emp AS tb
		WHERE
			ta. NAME = tb. NAME
	);

