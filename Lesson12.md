# Lesson 12 Index-Dictionary Views

A view is a snapshot of a combination of table joins that we can use to get data from one or more tables

## Quick definitions

Sequence - generates numeric values
Index - improves the perforamnce of data retrieval queries
Synonym - Gives alternative names to objects

## View

You can develop logical subsets of 1 or more tables by creating a view.

- View is a logical table but not a physical table with data.

- Therefore, has no data

- you can nest views within views

- the view is stored as a select statement in the data dictionary

## Why do we use them

1. To restrict data access eg. payroll
2. To make complex queries easier
3. to provide data independence
4. to present different views of the same data

## Simple vs complex views

There are two classifications for views; simple and complex.
The basic difference is related to DML operations.

A simple view is one that derives data from:

1. only one table
2. contains no functions or groups of data
3. can perform DML operations through the view to the underlying tables

A complex view is one that:

1. derives data from many tables
2. contains functions or groups of data
3. does not always allow DML operations through the view

## General Sytax

```sql
create [or replace] [force|noforce] VIEW view [(alias)]
as subquery
  [with check option [CONSTRAINT constraint]]
  [with read only [CONSTRAINT constraint]]

```

|     Keywords      |                                                                              Description                                                                               |
| :---------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    OR REPLACE     |                                                                Re-creates the view if it already exists                                                                |
|       FORCE       | Creates the view regardless of whether or not the base tables exist. Sometimes done during development of database and underlying tables may not have been created yet |
|     NO FORCE      |                                                            Default – creates view only if the tables exist                                                             |
|       View        |                                                                            Name of the view                                                                            |
|       Alias       |                                                               Alternate names for underlying expressions                                                               |
|     subquery      |                                                                              SELECT etc…                                                                               |
| WITH CHECK OPTION |                                       Specifies that only those rows that are accessible to the view can be inserted or updated                                        |
|    Constraint     |                                                          Is the name assigned to the CHECK OPTION constraint.                                                          |
|  WITH READ ONLY   |                                               Ensures that no DML operations can be performed on this view. No add etc…                                                |

## Examples

```sql
create view empvu80
  as  select employeeid,
  lastname,
  salary
  from employees
  where departmentid = 80

describe empvu80;
```

Guidelines

- The subquery that defines a view can contain complex SELECT syntax, including joins, groups, and subqueries.
- If you do not specify a constraint name for the view created with the WITH CHECK OPTION, the system assigns a default name in the SYS_Cn format.
- You can use the OR REPLACE option to change the definition of the view without dropping and re-creating it, or regranting the object privileges previously granted on it.

## with alias

```sql
create view salvu50
  as  select employeeid ID_NUMBER,
  lastname NAME,
  salary*12 ANN_SALARY
  from employees
  where departmentid = 50

select * from salvu50;
select lastname from salvu50; -- can treat as if it was a table
```

## Modify and changing views

```sql
create or replace VIEW empvu80 (id_number, name, sal,departmentid)
as  select employeeid,
firstname || ' ' || lastname,
salary,
departmentid
from employees
where departmentid = 80
```

## Complex Views

```sql
create or replace VIEW deptsumvu(name,minsal,maxsal,avgsal)
as select d.departmentname,
min(e.salary),
max(e.salary),
avg(e.salary)
from employees e join departments d
  on (e.departmentid = d.departmentid)
  group by d.departmentname

```

## Rules

1. you can usually perform DMLs on simple views
2. You cannot remove a row if the view contains the following

- group functions
- a group by clause
- the distinct keyboard
- pseudocolumn rownum keyword

## Modify

- You cannot modify data in a view if it contains:
  - group functions
  - a group by
  - distinct
  - row num
  - columns defined by expressions

## Add data

- All of the above
- not null columns in the base tables that are no selected by the view

## With Check

```sql
create or REPLACE view empvu20
as select * from employees
where departmentid = 20
with check option constraint empvu20_ck

-- STOPS any insert of a row that does not use department 20
-- Any update to department number in the view

```

## Stopping all DML

You can ensure that DML is disabled by adding WITH READ ONLY

```sql
create or REPLACE view empvu20
as select * from employees
where departmentid = 20
WITH READ ONLY
```

## Removing a view

```sql
drop view empvu80
```

## Sequence

1. used to automatically generate unique numbers
2. sharable object
3. can be used to create a primary key value
4. replaces application code
5. speeds up the efficiency of accesssing sequence values when cached

## Creating Sequence

```sql
CREATE SEQUENCE sequence		-- name of sequence
[INCREMENT BY n]			-- specifies increment value
[START WITH n]			-- Starting (default 1 if omitted
[{MAXVALUE n | NOMAXVALUE}]	-- maximum value – default is nomax
[{MINVALUE n | NOMINVALUE}] -- this is default if not stated
[{CYCLE | NOCYCLE}]		-- allows recycling of numbers–reuse
[{CACHE n | NOCACHE}];		-- allows caching x values-faster


create sequence dept_deptid_seq
  increment by 10
  start with 120
  maxvalue 9999
  nocache
  nocycle;
```

## Nextval and currval

NEXTVAL

- used to extract successive sequence number
- returns the next available sequence value.
  It returns a unique value every time it is referenced, even for different users.

Specify NEXTVAL and the sequence name

- CURRVAL obtains the current sequence value.

- NEXTVAL must be issued for that sequence before CURRVAL contains a value.

```sql
insert into departments (departmentid, departmentname, locationid)
values(dept_deptid_seq.nextval, 'support', 2500)

--because you have a sequence you do not need to look up the table to figure out the next primary key id
```

## Caching

- Caching sequence values in memory gives faster access to those values.

      	- Less going out to disk to retrieve the latest number an update it

- Gaps in sequence values can occur when:

* A rollback occurs

* The system crashes

* A sequence is used in another table (rare)

## Modding Sequence

```sql
alter sequence dept_deptid_seq
increment by 20
maxvalue 20000
nocache
nocycle;
```

## Guidelines:

- You must be the owner or have the ALTER privilege for the sequence.

- Only future sequence numbers are affected.

- The sequence must be dropped and re-created to restart the sequence at a different number.

- Some validation is performed.

- To remove a sequence, use the DROP statement:

```sql
DROP SEQUENCE dept_deptid_seq;
```

## Index

### Is used by the Oracle server to speed up the retrieval of rows by using a pointer.

If you do not have an index on the column then a FULL table scan is required.

### Can reduce I/O

The purpose of an index is to reduce I/O in accessing required data from disk

### Independent of the table

By being independent of the underlying table the index can be dropped or created with no effect on the data in the table or other indexes.

NOTE: Dropping a table will also drop any corresponding indexes.

### Maintained automatically by Oracle Server

No programmer or user activity is required to maintain the index once it is created.

DBA usually creates and decides on index

## What to index?

EXAMPLE:
Consider EMPLOYEE table
Would you index

- last name - YES
- job_id - not likely as it repeats a lot
- email - maybe – don't know. Depends on if it is searched a lot
- salary - only if use it as a search condition a lot

## Creating Index

```sql
CREATE INDEX emp_last_name_idx -- note naming convention
ON 	employees (last_name);

```

## SOME RULES ON INDEXES

1. The column is used often in a where clause and the table is large.

Example 1:
In the lost or stolen credit card department, many callers do not have the credit card number handy. The company uses the name to seek your information. With millions of credit card users an index would be faster.

Example 2:
A customer phones to place an order for product. The customer number is your company’s reference number and often is unknown to the caller. Again a search by name is often used.

2. The table is very large and most retrievals display a small amount of data.

The above example and reporting/queries that retrieve 1 to 5% of the data.

## TRADE-OFF

More indices do no speed the processing overall.

- For every index there is overhead activities to maintain the index.

* Null values are not included in the index

## Removing indexes

```sql
DROP INDEX emp_last_name_idx;
```

- Can't be modified. Must drop and add
- Must be owner to be able to DROP Or have privilege

Must be owner to be able to DROP
Or have privilege

What happens to the data - NOTHING

What happens to an application - NOTHING – may run slower

What is effected – just the speed of searches

DROP SEQUENCE -- Data not effected
-- Code might be if it uses the sequence

Code never has an index in it

:::warning NOTE
Drop a table, indexes and sequence automatically dropped.
Views remain

:::
