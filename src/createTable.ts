import { getClient } from "./connect";

const createTable = async () => {
    try {
        const client = await getClient();

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS "user" (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );`;

        await client.query(createTableQuery);

        const createTodoQuery = `
            CREATE TABLE IF NOT EXISTS todos (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                description TEXT,
                user_id INTEGER REFERENCES "user" (id),
                done BOOLEAN DEFAULT FALSE
            );`;

        await client.query(createTodoQuery);

        console.log("Tables created successfully");
    } catch (error) {
        console.error("Error creating tables:", error);
    }
};

createTable();
