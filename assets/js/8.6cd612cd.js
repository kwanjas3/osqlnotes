(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{212:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"lesson-12-index-dictionary-views"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lesson-12-index-dictionary-views"}},[e._v("#")]),e._v(" Lesson 12 Index-Dictionary Views")]),e._v(" "),a("p",[e._v("A view is a snapshot of a combination of table joins that we can use to get data from one or more tables")]),e._v(" "),a("h2",{attrs:{id:"quick-definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-definitions"}},[e._v("#")]),e._v(" Quick definitions")]),e._v(" "),a("p",[e._v("Sequence - generates numeric values\nIndex - improves the perforamnce of data retrieval queries\nSynonym - Gives alternative names to objects")]),e._v(" "),a("h2",{attrs:{id:"view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view"}},[e._v("#")]),e._v(" View")]),e._v(" "),a("p",[e._v("You can develop logical subsets of 1 or more tables by creating a view.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("View is a logical table but not a physical table with data.")])]),e._v(" "),a("li",[a("p",[e._v("Therefore, has no data")])]),e._v(" "),a("li",[a("p",[e._v("you can nest views within views")])]),e._v(" "),a("li",[a("p",[e._v("the view is stored as a select statement in the data dictionary")])])]),e._v(" "),a("h2",{attrs:{id:"why-do-we-use-them"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-do-we-use-them"}},[e._v("#")]),e._v(" Why do we use them")]),e._v(" "),a("ol",[a("li",[e._v("To restrict data access eg. payroll")]),e._v(" "),a("li",[e._v("To make complex queries easier")]),e._v(" "),a("li",[e._v("to provide data independence")]),e._v(" "),a("li",[e._v("to present different views of the same data")])]),e._v(" "),a("h2",{attrs:{id:"simple-vs-complex-views"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-vs-complex-views"}},[e._v("#")]),e._v(" Simple vs complex views")]),e._v(" "),a("p",[e._v("There are two classifications for views; simple and complex.\nThe basic difference is related to DML operations.")]),e._v(" "),a("p",[e._v("A simple view is one that derives data from:")]),e._v(" "),a("ol",[a("li",[e._v("only one table")]),e._v(" "),a("li",[e._v("contains no functions or groups of data")]),e._v(" "),a("li",[e._v("can perform DML operations through the view to the underlying tables")])]),e._v(" "),a("p",[e._v("A complex view is one that:")]),e._v(" "),a("ol",[a("li",[e._v("derives data from many tables")]),e._v(" "),a("li",[e._v("contains functions or groups of data")]),e._v(" "),a("li",[e._v("does not always allow DML operations through the view")])]),e._v(" "),a("h2",{attrs:{id:"general-sytax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-sytax"}},[e._v("#")]),e._v(" General Sytax")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("create")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("or")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("force")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("noforce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" subquery\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("with")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("check")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("option")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CONSTRAINT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constraint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("with")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("read")]),e._v(" only "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CONSTRAINT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constraint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Keywords")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("OR REPLACE")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Re-creates the view if it already exists")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("FORCE")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Creates the view regardless of whether or not the base tables exist. Sometimes done during development of database and underlying tables may not have been created yet")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("NO FORCE")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Default – creates view only if the tables exist")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("View")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Name of the view")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Alias")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Alternate names for underlying expressions")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("subquery")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("SELECT etc…")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("WITH CHECK OPTION")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Specifies that only those rows that are accessible to the view can be inserted or updated")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Constraint")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Is the name assigned to the CHECK OPTION constraint.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("WITH READ ONLY")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Ensures that no DML operations can be performed on this view. No add etc…")])])])]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("create")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" empvu80\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" employeeid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  lastname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  salary\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" employees\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("describe")]),e._v(" empvu80"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Guidelines")]),e._v(" "),a("ul",[a("li",[e._v("The subquery that defines a view can contain complex SELECT syntax, including joins, groups, and subqueries.")]),e._v(" "),a("li",[e._v("If you do not specify a constraint name for the view created with the WITH CHECK OPTION, the system assigns a default name in the SYS_Cn format.")]),e._v(" "),a("li",[e._v("You can use the OR REPLACE option to change the definition of the view without dropping and re-creating it, or regranting the object privileges previously granted on it.")])]),e._v(" "),a("h2",{attrs:{id:"with-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-alias"}},[e._v("#")]),e._v(" with alias")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("create")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" salvu50\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" employeeid ID_NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  lastname NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  salary"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" ANN_SALARY\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" employees\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" salvu50"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" lastname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" salvu50"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- can treat as if it was a table")]),e._v("\n")])])]),a("h2",{attrs:{id:"modify-and-changing-views"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-and-changing-views"}},[e._v("#")]),e._v(" Modify and changing views")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("create")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("or")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("replace")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" empvu80 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("id_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" employeeid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\nfirstname "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("' '")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" lastname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\nsalary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\ndepartmentid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" employees\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\n")])])]),a("h2",{attrs:{id:"complex-views"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complex-views"}},[e._v("#")]),e._v(" Complex Views")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("create")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("or")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("replace")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" deptsumvu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("minsal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("maxsal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("avgsal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("departmentname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("salary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("salary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("avg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("salary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" employees e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("join")]),e._v(" departments d\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("on")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("group")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("by")]),e._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("departmentname\n\n")])])]),a("h2",{attrs:{id:"rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[e._v("#")]),e._v(" Rules")]),e._v(" "),a("ol",[a("li",[e._v("you can usually perform DMLs on simple views")]),e._v(" "),a("li",[e._v("You cannot remove a row if the view contains the following")])]),e._v(" "),a("ul",[a("li",[e._v("group functions")]),e._v(" "),a("li",[e._v("a group by clause")]),e._v(" "),a("li",[e._v("the distinct keyboard")]),e._v(" "),a("li",[e._v("pseudocolumn rownum keyword")])]),e._v(" "),a("h2",{attrs:{id:"modify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify"}},[e._v("#")]),e._v(" Modify")]),e._v(" "),a("ul",[a("li",[e._v("You cannot modify data in a view if it contains:\n"),a("ul",[a("li",[e._v("group functions")]),e._v(" "),a("li",[e._v("a group by")]),e._v(" "),a("li",[e._v("distinct")]),e._v(" "),a("li",[e._v("row num")]),e._v(" "),a("li",[e._v("columns defined by expressions")])])])]),e._v(" "),a("h2",{attrs:{id:"add-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-data"}},[e._v("#")]),e._v(" Add data")]),e._v(" "),a("ul",[a("li",[e._v("All of the above")]),e._v(" "),a("li",[e._v("not null columns in the base tables that are no selected by the view")])]),e._v(" "),a("h2",{attrs:{id:"with-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-check"}},[e._v("#")]),e._v(" With Check")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("create")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("or")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("REPLACE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" empvu20\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" employees\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("with")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("check")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("option")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constraint")]),e._v(" empvu20_ck\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- STOPS any insert of a row that does not use department 20")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- Any update to department number in the view")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"stopping-all-dml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stopping-all-dml"}},[e._v("#")]),e._v(" Stopping all DML")]),e._v(" "),a("p",[e._v("You can ensure that DML is disabled by adding WITH READ ONLY")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("create")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("or")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("REPLACE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" empvu20\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" employees\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("READ")]),e._v(" ONLY\n")])])]),a("h2",{attrs:{id:"removing-a-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removing-a-view"}},[e._v("#")]),e._v(" Removing a view")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("drop")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" empvu80\n")])])]),a("h2",{attrs:{id:"sequence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequence"}},[e._v("#")]),e._v(" Sequence")]),e._v(" "),a("ol",[a("li",[e._v("used to automatically generate unique numbers")]),e._v(" "),a("li",[e._v("sharable object")]),e._v(" "),a("li",[e._v("can be used to create a primary key value")]),e._v(" "),a("li",[e._v("replaces application code")]),e._v(" "),a("li",[e._v("speeds up the efficiency of accesssing sequence values when cached")])]),e._v(" "),a("h2",{attrs:{id:"creating-sequence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-sequence"}},[e._v("#")]),e._v(" Creating Sequence")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" SEQUENCE sequence\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- name of sequence")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("INCREMENT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- specifies increment value")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("START")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- Starting (default 1 if omitted")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("{MAXVALUE n "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" NOMAXVALUE}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- maximum value – default is nomax")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("{MINVALUE n "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" NOMINVALUE}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- this is default if not stated")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("{"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CYCLE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" NOCYCLE}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- allows recycling of numbers–reuse")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("{CACHE n "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" NOCACHE}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- allows caching x values-faster")]),e._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("create")]),e._v(" sequence dept_deptid_seq\n  increment "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("by")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("start")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("with")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("120")]),e._v("\n  maxvalue "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("9999")]),e._v("\n  nocache\n  nocycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h2",{attrs:{id:"nextval-and-currval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextval-and-currval"}},[e._v("#")]),e._v(" Nextval and currval")]),e._v(" "),a("p",[e._v("NEXTVAL")]),e._v(" "),a("ul",[a("li",[e._v("used to extract successive sequence number")]),e._v(" "),a("li",[e._v("returns the next available sequence value.\nIt returns a unique value every time it is referenced, even for different users.")])]),e._v(" "),a("p",[e._v("Specify NEXTVAL and the sequence name")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("CURRVAL obtains the current sequence value.")])]),e._v(" "),a("li",[a("p",[e._v("NEXTVAL must be issued for that sequence before CURRVAL contains a value.")])])]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("insert")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("into")]),e._v(" departments "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" departmentname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" locationid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("dept_deptid_seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("nextval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'support'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("--because you have a sequence you do not need to look up the table to figure out the next primary key id")]),e._v("\n")])])]),a("h2",{attrs:{id:"caching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caching"}},[e._v("#")]),e._v(" Caching")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Caching sequence values in memory gives faster access to those values.")]),e._v(" "),a("pre",[a("code",[e._v("\t- Less going out to disk to retrieve the latest number an update it\n")])])]),e._v(" "),a("li",[a("p",[e._v("Gaps in sequence values can occur when:")])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("A rollback occurs")])]),e._v(" "),a("li",[a("p",[e._v("The system crashes")])]),e._v(" "),a("li",[a("p",[e._v("A sequence is used in another table (rare)")])])]),e._v(" "),a("h2",{attrs:{id:"modding-sequence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modding-sequence"}},[e._v("#")]),e._v(" Modding Sequence")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" sequence dept_deptid_seq\nincrement "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("by")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("\nmaxvalue "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20000")]),e._v("\nnocache\nnocycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h2",{attrs:{id:"guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guidelines"}},[e._v("#")]),e._v(" Guidelines:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("You must be the owner or have the ALTER privilege for the sequence.")])]),e._v(" "),a("li",[a("p",[e._v("Only future sequence numbers are affected.")])]),e._v(" "),a("li",[a("p",[e._v("The sequence must be dropped and re-created to restart the sequence at a different number.")])]),e._v(" "),a("li",[a("p",[e._v("Some validation is performed.")])]),e._v(" "),a("li",[a("p",[e._v("To remove a sequence, use the DROP statement:")])])]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DROP")]),e._v(" SEQUENCE dept_deptid_seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h2",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),a("h3",{attrs:{id:"is-used-by-the-oracle-server-to-speed-up-the-retrieval-of-rows-by-using-a-pointer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-used-by-the-oracle-server-to-speed-up-the-retrieval-of-rows-by-using-a-pointer"}},[e._v("#")]),e._v(" Is used by the Oracle server to speed up the retrieval of rows by using a pointer.")]),e._v(" "),a("p",[e._v("If you do not have an index on the column then a FULL table scan is required.")]),e._v(" "),a("h3",{attrs:{id:"can-reduce-i-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-reduce-i-o"}},[e._v("#")]),e._v(" Can reduce I/O")]),e._v(" "),a("p",[e._v("The purpose of an index is to reduce I/O in accessing required data from disk")]),e._v(" "),a("h3",{attrs:{id:"independent-of-the-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#independent-of-the-table"}},[e._v("#")]),e._v(" Independent of the table")]),e._v(" "),a("p",[e._v("By being independent of the underlying table the index can be dropped or created with no effect on the data in the table or other indexes.")]),e._v(" "),a("p",[e._v("NOTE: Dropping a table will also drop any corresponding indexes.")]),e._v(" "),a("h3",{attrs:{id:"maintained-automatically-by-oracle-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maintained-automatically-by-oracle-server"}},[e._v("#")]),e._v(" Maintained automatically by Oracle Server")]),e._v(" "),a("p",[e._v("No programmer or user activity is required to maintain the index once it is created.")]),e._v(" "),a("p",[e._v("DBA usually creates and decides on index")]),e._v(" "),a("h2",{attrs:{id:"what-to-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-to-index"}},[e._v("#")]),e._v(" What to index?")]),e._v(" "),a("p",[e._v("EXAMPLE:\nConsider EMPLOYEE table\nWould you index")]),e._v(" "),a("ul",[a("li",[e._v("last name - YES")]),e._v(" "),a("li",[e._v("job_id - not likely as it repeats a lot")]),e._v(" "),a("li",[e._v("email - maybe – don't know. Depends on if it is searched a lot")]),e._v(" "),a("li",[e._v("salary - only if use it as a search condition a lot")])]),e._v(" "),a("h2",{attrs:{id:"creating-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-index"}},[e._v("#")]),e._v(" Creating Index")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" emp_last_name_idx "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- note naming convention")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" \temployees "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("last_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"some-rules-on-indexes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-rules-on-indexes"}},[e._v("#")]),e._v(" SOME RULES ON INDEXES")]),e._v(" "),a("ol",[a("li",[e._v("The column is used often in a where clause and the table is large.")])]),e._v(" "),a("p",[e._v("Example 1:\nIn the lost or stolen credit card department, many callers do not have the credit card number handy. The company uses the name to seek your information. With millions of credit card users an index would be faster.")]),e._v(" "),a("p",[e._v("Example 2:\nA customer phones to place an order for product. The customer number is your company’s reference number and often is unknown to the caller. Again a search by name is often used.")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("The table is very large and most retrievals display a small amount of data.")])]),e._v(" "),a("p",[e._v("The above example and reporting/queries that retrieve 1 to 5% of the data.")]),e._v(" "),a("h2",{attrs:{id:"trade-off"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trade-off"}},[e._v("#")]),e._v(" TRADE-OFF")]),e._v(" "),a("p",[e._v("More indices do no speed the processing overall.")]),e._v(" "),a("ul",[a("li",[e._v("For every index there is overhead activities to maintain the index.")])]),e._v(" "),a("ul",[a("li",[e._v("Null values are not included in the index")])]),e._v(" "),a("h2",{attrs:{id:"removing-indexes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removing-indexes"}},[e._v("#")]),e._v(" Removing indexes")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DROP")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" emp_last_name_idx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("ul",[a("li",[e._v("Can't be modified. Must drop and add")]),e._v(" "),a("li",[e._v("Must be owner to be able to DROP Or have privilege")])]),e._v(" "),a("p",[e._v("Must be owner to be able to DROP\nOr have privilege")]),e._v(" "),a("p",[e._v("What happens to the data - NOTHING")]),e._v(" "),a("p",[e._v("What happens to an application - NOTHING – may run slower")]),e._v(" "),a("p",[e._v("What is effected – just the speed of searches")]),e._v(" "),a("p",[e._v("DROP SEQUENCE -- Data not effected\n-- Code might be if it uses the sequence")]),e._v(" "),a("p",[e._v("Code never has an index in it")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Drop a table, indexes and sequence automatically dropped.\nViews remain")])])])}),[],!1,null,null,null);t.default=n.exports}}]);