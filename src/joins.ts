import { getClient } from "./connect";

const getUserDataAndTodosWithJoins = async (user_id:number)=>{

    const client = await getClient()

    const joinQuery = `
    SELECT "user".* , todos.description , todos.done
    FROM "user"
    LEFT JOIN todos ON "user".id = todos.user_id
    WHERE "user".id = $1`

    let response = await client.query(joinQuery , [user_id])

    console.log(response.rows)

}

getUserDataAndTodosWithJoins(1)


const getAllUseDataAndTodosWithJoins = async ()=>{
    const client = await getClient()

    const joinQuery = `SELECT todos.* , "user".* , "user".password
    FROM todos
    JOIN "user" ON todos.user_id = "user".id
    `
    const res = await client.query(joinQuery)

    console.log(res.rows)

}

getAllUseDataAndTodosWithJoins()