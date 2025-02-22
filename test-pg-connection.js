const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Ai_FlashMind',
  password: '2004',
  port: 5432
});


async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL server successfully!');
    
    // List all databases
    const res = await client.query('SELECT datname FROM pg_database');
    console.log('Available databases:');
    res.rows.forEach(row => console.log(`- ${row.datname}`));
    
  } catch (err) {
    console.error('Connection error:', err);
  } finally {
    await client.end();
  }
}


testConnection();
