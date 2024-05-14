"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const pg_1 = require("pg");
const getClient = async () => {
    const client = new pg_1.Client('postgres://aditya:aditya@localhost:5432/aditya');
    await client.connect();
    return client;
};
exports.getClient = getClient;
