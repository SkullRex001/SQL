"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = require("./connect");
const deleteTodo = async (todoId) => {
    const client = await (0, connect_1.getClient)();
    const deleteTodoText = `DELETE FROM todos WHERE id=$1`;
    await client.query(deleteTodoText, [todoId]);
    console.log(`Todo with id  ${todoId} has been deleted`);
};
deleteTodo(1);
