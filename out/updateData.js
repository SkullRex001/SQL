"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = require("./connect");
const updateTodo = async (todoId) => {
    const client = await (0, connect_1.getClient)();
    const updateTodoText = `UPDATE todos SET done = $1 WHERE id = $2`;
    await client.query(updateTodoText, [true, todoId]);
    console.log(`Todo with Id ${todoId} update to done`);
};
updateTodo(1);
