# Lesson 7 Quiz Questions

## 1. Which of the following are the types of sub-queries?

- A. Ordered sub-queries
- B. Grouped sub-queries
- C. Single row sub-queries
- D. None of the above

Answer: C. A subquery is a complete query nested in the SELECT,FROM, HAVING, or WHERE clause of another query.The subquery must be enclosed in parentheses and have a SELECT and a FROM clause, at a minimum. Single row sub-queries and multi-row sub-queries are the main types of sub-queries

## 2.Which of the following is true about sub-queries?

- A. They execute after the main query executes
- B. They execute in parallel to the main query
- C. The user can execute the main query and then, if wanted, execute the sub-query
- D. They execute before the main query executes.

Answer: D. The sub-query always executes before the execution of the main query. Subqueries are completed first. The result of the subquery is used as input for the outer query.

## 3.Which of the following is true about the result of a sub-query?

- A. The result of a sub-query is generally ignored when executed.
- B. The result of a sub-query doesn't give a result, it is just helpful in speeding up the main query execution
- C. The result of a sub-query is used by the main query.
- D. The result of a sub-query is always NULL

Answer: C. Subqueries are completed first.The result of the subquery is used as input for the outer query.

## 4.Which of the following clause is mandatorily used in a sub-query?

- A. SELECT
- B. WHERE
- C. ORDER BY
- D. GROUP BY

Answer: A. A sub-query is just like any other query which has to start with a SELECT clause. They are contained within an outer query.

## 5. Which of the following is a method for writing a sub-query in a main query?

- A. By using JOINS
- B. By using WHERE clause
- C. By using the GROUP BY clause
- D. By writing a SELECT statement embedded in the clause of another SELECT statement

Answer: D. A subquery is a complete query nested in the SELECT, FROM, HAVING, or WHERE clause of another query.The subquery must be enclosed in parentheses and have a SELECT and a FROM clause, at a minimum.

## 6.In the given scenarios, which one would appropriately justify the usage of sub-query?

- A. HAVING
- B. WHERE
- C. FROM
- D. All of the above

Answer: D. A sub-query is not different from a normal query. It can make use of all the primary clauses of a SELECT statement.

## 8.Which of the following single-row operators can be used for writing a sub-query?

- A. >=
- B. <
- C. =
- D. All of the above

Answer: D. Single-row operators include =, >, <, >=, <=, and <>.

## 9.Which of the following multi-row operators can be used with a sub-query?

- A. IN
- B. ANY
- C. ALL
- D. All of the above

Answer: D. Multiple-row subqueries return more than one row of results.Operators that can be used with multiple-row subqueries include IN, ALL, ANY, and EXISTS.

## 10.What is true about the output obtained from a sub-query?

- A. It remains in the buffer cache
- B. It remains inside the sub-query and can be used later when needed
- C. It is used to complete the outer (main) query
- D. Both A and C

Answer: C. Subqueries are completed first. The result of the subquery is used as input for the outer query.

## 12.What among the following is true about sub-queries?

- A. Sub-queries can be written on either side of a comparison operator

- B. Parenthesis is not mandatory for sub-queries
- C. Single-row sub-queries can use multi-row operators but vice versa is not possible
- D. All of the above

Answer: A. Sub queries can be placed on left or right hand side of the comparison operator depending on the query indentation and usability.

## 14.Which of the following is true about single-row sub-queries?

- A. They give one result from the main query
- B. They give only one row in the result set
- C. They return only one row from the inner SELECT statement
- D. They give multiple rows from the main (outer) query

Answer: C. A single-row subquery can return a maximum of one value.

## 15.What is true about multi-row sub-queries?

- A. They can return more than one column as the result of the inner query
- B. They return multiple rows in the main query but only a single result set in the inner query
- C. They return single row in the main query but multiple rows in the inner sub-query
- D. They return more than one row from the inner SELECT statement

Answer: D. Multi-column sub-queries return more than one column in their result set, multi-row sub-queries return more than one row from the inner query.

## 21.Consider two statements about outer and inner queries in context of SQL sub-queries?

i. The inner queries can get data from only one table
ii. The inner queries can get data from more than one table
Which of the above statements are true?

- A. (i)
- B. (ii)
- C. Both (i) and (ii)
- D. Neither (i) nor (ii)

Answer: B. Sub-queries can fetch data from more than one table.
