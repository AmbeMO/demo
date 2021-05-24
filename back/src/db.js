const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '228',
    host: 'localhost',
    port: 5432,
    database: 'delivery_service',
});

module.exports = pool;
