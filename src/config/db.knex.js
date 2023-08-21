import knexFile from '../../knexfile'
import knex from "knex";

const environtment = process.env.NODE_ENV || "development";
const db = knex(knexFile[environtment])

export default db;