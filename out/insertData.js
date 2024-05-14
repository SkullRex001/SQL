"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = require("./connect");
const insertData = async () => {
    const client = await (0, connect_1.getClient)();
    const insertUserText = `INSERT INTO "user" (email , password) VALUES ($1 , $2) RETURNING id`;
    const userValues = ['adqqitya@gmail.com', 'aditya'];
    let response = await client.query(insertUserText, userValues);
    const inserTodoText = `INSERT INTO todos (title , description , user_id , done) VALUES ($1 , $2 , $3 , $4)`;
    const todosValues = ['Buy Food', 'Milk , Egg , Bread', response.rows[0].id, false];
    await client.query(inserTodoText, todosValues);
    console.log("Data inserted Successfully");
};
insertData();
