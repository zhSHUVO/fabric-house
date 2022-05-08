import React from "react";
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className="d-flex justify-content-center p-5">
            <div className="col-lg-6 col-sm-12">
                <h1 className="text-center">Q&A</h1>
                <div className="mt-5">
                    <h3>Difference between javascript and nodejs</h3>
                    <p>
                        <span>-</span> JavaScript is a programming language on
                        the other hand node js is a javascript runtime
                        environment. JavaScript can only run inside browser. But
                        we can run javascript outside of nodejs. Js is used on
                        the client side, where nodejs is used on the server
                        side. JavaScript can run in any brower engine but nodejs
                        is only capable of running in v8 engine by google
                        chrome.
                    </p>
                </div>
                <div className="mt-5">
                    <h3>
                        When should you use nodejs and when should you use
                        mongodb
                    </h3>
                    <p>
                        <span>-</span> We use nodejs to build server. And we use
                        mongodb to build databases. If we want to make a server
                        for a web application in javascript, nodejs is a good
                        tool to use. And mongodb is a better tool to maintain
                        data for it's automatic, fast, no-sql databases. So,
                        mongodb is a database and nodejs helps us to connect to
                        the database.
                    </p>
                </div>
                <div className="mt-5">
                    <h3>Differences between sql and nosql databases.</h3>
                    <p>
                        <span>-</span> SQL database are called as Realtional
                        databases (RDBMS) and NoSQL databases are called as
                        non-relational databases. Sql databases store data in
                        tables with fixed rows and columns. NoSQL databases
                        store data in document format, json. Oracle, MySQL,
                        Microsoft SQL and PostgreSQL usaes sql databases system.
                        where MongoDB, CouchDB, DynamoDB usaes nosql database
                        system. SQL is rigid, nosql is flexible. SQL scales in
                        verticaly, nosql scales in horizontal. Query is faster
                        in nosql databases and they are easy to develop.
                    </p>
                </div>
                <div className="mt-5">
                    <h3>What is the purpose of jwt and how does it work</h3>
                    <p>
                        <span>-</span> JWT stands for "JSON web token". It's
                        security token that helps improve security. It has some
                        encrypted information about the user that will be used
                        to decrypt in the server and identify the user. JWT is
                        very poopular now and even used by the big companies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
