# Lesson 8 Set operators

## Types: Unions

A union of table A and table B with no duplicates

JOB_HISTORY Table keeps history of when an employee changes jobs

Records start date and end date of employees that switch jobs
Employees who are still in the same job will not appear here
The current job is shown in the EMPLOYEE table. Again, this shows history.

```sql
 SELECT * FROM job_history;
EMPLOYEE_ID            START_DATE                END_DATE       JOB_ID     DEPARTMENT_ID
102                    13-JAN-93                 24-JUL-98      IT_PROG    60
101                    21-SEP-89                 27-OCT-93      AC_ACCOUNT 110
101                    28-OCT-93                 15-MAR-97      AC_MGR     110
201                    17-FEB-96                 19-DEC-99      MK_REP     20
114                    24-MAR-98                 31-DEC-99      ST_CLERK   50
122                    01-JAN-99                 31-DEC-99      ST_CLERK   50
200                    17-SEP-87                 17-JUN-93      AD_ASST    90
176                    24-MAR-98                 31-DEC-98      SA_REP     80
176                    01-JAN-99                 31-DEC-99      SA_MAN     80
200                    01-JUL-94                 31-DEC-98      AC_ACCOUNT 90

SELECT employee_id, job_id, department_id
FROM   employees;

EMPLOYEE_ID JOB_ID     DEPARTMENT_ID
----------- ---------- -------------
        100 AD_PRES               90
        101 AD_VP                 90
        102 AD_VP                 90
        103 IT_PROG               60
        104 IT_PROG               60
        107 IT_PROG               60
        124 ST_MAN                50
        141 ST_CLERK              50
        142 ST_CLERK              50
        143 ST_CLERK              50
        144 ST_CLERK              50
        149 SA_MAN                80
        174 SA_REP                80
        176 SA_REP                80
        178 SA_REP
        200 AD_ASST               10
        201 MK_MAN                20
        202 MK_REP                20
        205 AC_MGR               110
        206 AC_ACCOUNT           110


```

We can union the tables

```sql
SELECT employee_id, job_id
FROM   employees
UNION
SELECT employee_id, job_id
FROM   job_history
ORDER BY job_id;

EMPLOYEE_ID            JOB_ID
---------------------- ----------
100                    AD_PRES
101                    AC_ACCOUNT
101                    AC_MGR
101                    AD_VP
102                    AD_VP
102                    IT_PROG
103                    IT_PROG
104                    IT_PROG
107                    IT_PROG
114                    ST_CLERK
122                    ST_CLERK
124                    ST_MAN
141                    ST_CLERK
142                    ST_CLERK
143                    ST_CLERK
144                    ST_CLERK
149                    SA_MAN
174                    SA_REP
176                    SA_MAN
176                    SA_REP
178                    SA_REP
200                    AC_ACCOUNT
200                    AD_ASST
201                    MK_MAN
201                    MK_REP
202                    MK_REP
205                    AC_MGR
206                    AC_ACCOUNT

```

## Union All

Shows Duplicates

```sql
SELECT employee_id, job_id
FROM   employees
UNION ALL
SELECT employee_id, job_id
FROM   job_history
ORDER BY employee_id;

EMPLOYEE_ID            JOB_ID
---------------------- ----------
100                    AD_PRES
101                    AD_VP
101                    AC_ACCOUNT
101                    AC_MGR
102                    IT_PROG
102                    AD_VP
103                    IT_PROG
104                    IT_PROG
107                    IT_PROG
114                    ST_CLERK
122                    ST_CLERK
124                    ST_MAN
141                    ST_CLERK
142                    ST_CLERK
143                    ST_CLERK
144                    ST_CLERK
149                    SA_MAN
174                    SA_REP
176                    SA_REP    Was a Sales Representative
176                    SA_MAN    Became a Sales Manager
176                    SA_REP    Went back to a Sales Rep
178                    SA_REP
200                    AD_ASST   Looks like the same here
200                    AD_ASST
200                    AC_ACCOUNT
201                    MK_REP
201                    MK_MAN
202                    MK_REP
205                    AC_MGR
206                    AC_ACCOUNT

```

## Intersect

Shows only common rows

```sql
SELECT employee_id, job_id, department_id
FROM   employees
INTERSECT
SELECT employee_id, job_id, department_id
FROM   job_history
ORDER BY employee_id;

EMPLOYEE_ID JOB_ID     DEPARTMENT_ID
----------- ---------- -------------
        176 SA_REP                80

```

What does this code do?

```sql
  SELECT 	employee_id as "Emp#",  job_id as "Job Title"
  FROM   	employees
  UNION ALL
  SELECT 	employee_id, job_id
  FROM   	job_history
  ORDER BY 1, 2
```

## Minus

Show rows in the first query that are not in the second query

:::warning
PRECEDENCE – equal – evaluated left to right

Caution recommended. Use brackets with INTERSECT

:::

```sql
SELECT employee_id, job_id
FROM   employees
MINUS
SELECT employee_id, job_id
FROM   job_history
ORDER BY 1, 2

```

Give a list of department_id, location_id, hire_date.

That requires 2 tables, EMPLOYEES and DEPARTMENT

Using a JOIN

```sql
SELECT E.department_id, location_id, hire_date
FROM   employees E, departments D
WHERE	E.department_id = D.department_id
```

Using an union

:::tip
Display department ID, location ID and hire date for all members

To use SET operators you need the same number of columns

Need 3 columns in employees

Need same 3 columns in departments

:::

### PROBLEM

    Need hire_date from employees but it doesn't have a location_id in employees

    Need location_id from departments but it doesn't have a date to match with

```sql
SELECT department_id, TO_NUMBER (null) as location, hire_date
FROM   employees
UNION
SELECT department_id, location_id, TO_DATE (null)
FROM   departments;


DEPARTMENT_ID   LOCATION HIRE_DATE
------------- ---------- ---------
           10       1700
           10            17-SEP-87
           20       1800
           20            17-FEB-96
           20            17-AUG-97
           50       1500
           50            17-OCT-95
           50            29-JAN-97
           50            15-MAR-98
           50            09-JUL-98
           50            16-NOV-99
           60       1400
           60            03-JAN-90
           60            21-MAY-91
           60            07-FEB-99
           80       2500
           80            11-MAY-96
           80            24-MAR-98
           80            29-JAN-00
           90       1700
           90            17-JUN-87
           90            21-SEP-89
           90            13-JAN-93
          110       1700
          110            07-JUN-94
          190       1700
                         24-MAY-99

```

## Rules or Guidelines

- The expressions in the SELECT lists must match in number. - If you select 3 columns in A, then must have 3 columns in B

- The data type of each column in the second query must match the data type of its corresponding column in the first query.

- Parentheses can be used to alter the sequence of execution.

- ORDER BY clause can appear only at the very end of the statement.

Other

• Duplicate rows are automatically eliminated except in UNION ALL.

• Column names from the first query are the ones that appear in the result.

• The output is sorted in ascending order by default except in UNION ALL.
