# Lesson 11 Manage Schema Objects - Altering Tables

Use the alter table statement to:

- add a new column
- modify an existing column
- define default for new column
- drop a column

```sql
alter table tableN
add (column datatype [default expr],
...
);
alter table tableN
modify (column datatype [default expr],
...
);
alter table tableN
drop (column);

```

## Example

```sql
Alter table dept80
add (jobid varchar(9))
```

:::tip

- You can add or modify a column
- You cannot determine the order of the columns
- In the above, the column added is the last column

:::

:::warning Note

- if table has rows of values, then the column is either null or the default.
- if th column is NOT NULL, then it needs a default value to start with.
- if table is empty you can add a NOT NULL without the need for a default value.
  :::

## Modifying a Column

```sql
Alter table dept80
modify (last_name varchar(30))
```

## Guidelines to modifying

1. increase width or precision of numeric columns
2. increase width of character columns

3. you can decrease width if:

- the column has only NULL values
- the table has no rows
- the decreases is not less than the values in the column

4. You can change the data type if null

- except char to varchar is allowed

5. a change to the default is not retroactive

## Dropping a column

```sql
alter table dept80
drop column jobid
```

:::tip
Only 1 column dropped at a time

- the column can or cannot have data in it
- after the alter there must be at least 1 column left in the table
- columns that are part of a constraint cannot be dropped
  :::

## Using UNUSED

Marks 1 or more columns as unused.

- Dropping may be slow if there is a lot of data to drop
- May be better to mark as unused and drop later when fewer users on system

:::tip
SELECT \* will not show the data even though it is still there
DESCRIBE will not show the columns
:::

You can DROP UNUSED COLUMN to remove a column marked as unused.

```sql
alter table departments
  set unused(phone);
alter table departments
  drop unused columns;
```

## Constraints

ALTER TABLE – ADD CONSTRAINTS

- ADD constraints
- DROP constraints

- ENABLE
- DISABLE

- ADD NOT NULL

### add a foreign key constraint to emp2 table indicating that a manager must already exist as valid employee in emp2 table

```sql
alter table emp2
modify employeeid Primary key;

alter table emp2
add constraint emp_mgr_fk
  foreign key (managerid)
  references emp2(employeeid)

```

## ON DELETE CASCADE

```sql
ALTER TABLE	EMPLOYEES
ADD CONSTRAINT em_dt_fk
FOREIGN KEY	(departmentid)
REFERENCES	departments (departmentid)
ON DELETE CASCADE
```

:::tip

- Allow parent key data that is referenced in the child table to be deleted but not updated
- When parent row is deleted, all child rows that reference that parent key is also deleted.

* i.e. if you delete the department ID in the department table all references in employees will be deleted
  :::

```sql
DROP TABLE DEPT_100;

CREATE TABLE	dept_100
(emp_id	number (4) 	PRIMARY KEY,
Lname	varchar2(10),
Mgr_id	number (4) 	CONSTRAINT  fk_MGRd100
				REFERENCES	DEPT_100
				ON DELETE CASCADE
);
INSERT INTO DEPT_100	VALUES (1,'ONE',NULL);
INSERT INTO DEPT_100 	VALUES (2,'two',1);
INSERT INTO DEPT_100 	VALUES (3,'333',1);
INSERT INTO DEPT_100 	VALUES (4,'444',2);
INSERT INTO DEPT_100 	VALUES (5,'555',2);
SELECT * FROM DEPT_100;


RESULT:
    EMP_ID LNAME          MGR_ID
---------- ---------- ----------
         1 ONE
         2 two                 1
         3 333                 1
         4 444                 2
         5 555                 2

delete from dept_100
where emp_id = 1;

select * from dept_100;

-- returns
-- no rows selected

```

:::danger What happened

- When parent row is deleted, all child rows that reference that parent key is also deleted.
  :::

## ON DELETE SET NULL

```sql
DROP TABLE DEPT_100;

CREATE TABLE	dept_100
(emp_id	number (4) 	PRIMARY KEY,
Lname	varchar2(10),
Mgr_id	number (4) 	CONSTRAINT  fk_MGRd100
				REFERENCES	DEPT_100
				ON DELETE SET NULL
);
INSERT INTO DEPT_100	VALUES (1,'ONE',NULL);
INSERT INTO DEPT_100 	VALUES (2,'two',1);
INSERT INTO DEPT_100 	VALUES (3,'333',1);
INSERT INTO DEPT_100 	VALUES (4,'444',2);
INSERT INTO DEPT_100 	VALUES (5,'555',2);
SELECT * FROM DEPT_100;

RESULT:
    EMP_ID LNAME          MGR_ID
---------- ---------- ----------
         1 ONE
         2 two                 1
         3 333                 1
         4 444                 2
         5 555                 2

Remove manager 1
delete from dept_100
where emp_id = 1;

select * from dept_100;
--1 rows deleted.
    EMP_ID LNAME          MGR_ID
---------- ---------- ----------
         2 two
         3 333
         4 444                 2
         5 555                 2

```

## Deferring constraints

Used in transactions

Constraints can have the following attributes:

- deferrable or not deferrable
- initially deferred or initially immediate

```sql
alter table dept2
add constraint dept2_id_pk
primary key (departmentid)
deferrable initially deferred;
--
set constraints dept_id_pk IMMEDIATE

alter session
set constraints = immediate

```

|     Constraint      |                                                             |
| :-----------------: | :---------------------------------------------------------: |
| Initially deferred  |  waits to check the constraint until the transaction ends   |
| initially immediate | checks the constraint at the end of the statement execution |

## Dropping/Disabling/enable Constraint

```sql
alter table emp2
drop constraint emp_mgr_fk;
alter table dept2
drop primary key cascade;

alter table emp2
disable constraint emp_dt_fk cascade;
alter table emp2
enable constraint emp_dt_fk cascade;
```
