import { getClient } from "./connect";

const deleteTodo = async (todoId: number)=>{

    const client = await getClient()

    const deleteTodoText = `DELETE FROM todos WHERE id=$1`

    await client.query(deleteTodoText , [todoId])

    console.log(`Todo with id  ${todoId} has been deleted`)

}

deleteTodo(1)