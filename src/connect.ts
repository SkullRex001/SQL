import { Client } from "pg";


export const getClient = async ()=>{

    const client = new Client('postgres://aditya:aditya@localhost:5432/aditya')
    await client.connect()
    return client;

}