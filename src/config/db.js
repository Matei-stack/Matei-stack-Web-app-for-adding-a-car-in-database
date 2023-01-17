const Pool = require("pg").Pool;

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'myCar_db',
    password:'stud',
    port:'5432'
});

module.exports = pool;