import { getClient } from "./connect";

const updateTodo = async (todoId : number)=>{
    const client = await getClient()

    const updateTodoText = `UPDATE todos SET done = $1 WHERE id = $2`

    await client.query(updateTodoText , [true , todoId])

    console.log(`Todo with Id ${todoId} update to done`)

}

updateTodo(1)