const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "1920Rockjazz",
    host: "localhost",
    database: "pernstack",
    port: 5432
});

module.exports = pool;