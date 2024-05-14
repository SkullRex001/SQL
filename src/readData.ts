import { getClient } from "./connect";


const getUser = async ()=>{
    const client = await getClient()

    const selectUserText = `SELECT * FROM "user"`

    const userRes = await client.query(selectUserText)

    for(let user of userRes.rows){
        console.log(`ID : ${user.id} , Email : ${user.email}`)
    }

  
}

const getUserFromEmail = async (email:string)=>{
    const client = await getClient()

    const selectUserText = `SELECT * FROM "user" WHERE email=$1`
    const userRes = await client.query(selectUserText , [email])

    for(let user of userRes.rows){
        console.log(`Id : ${user.id} , Email : ${user.email}`)
    }
}

getUserFromEmail("adqqitya@gmail.com")
const getTodosForUser = async (userId : number)=>{
    const client = await getClient()
    const selectTodosText = `SELECT * FROM todos WHERE user_id=$1`

    const todosRes = await client.query(selectTodosText , [userId])

    for(let todos of todosRes.rows){
        console.log(`ID : ${todos.id} , Title : ${todos.title} , Description: ${todos.description} , Done: ${todos.done}`)
    }
}


getTodosForUser(3)