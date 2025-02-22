require('dotenv').config();
const { Client } = require('pg');
const { URL } = require('url');

// Verify DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set');
  process.exit(1);
}

try {
  // Parse the connection string
  const dbUrl = new URL(process.env.DATABASE_URL);

  const client = new Client({
    user: dbUrl.username,
    password: dbUrl.password,
    host: dbUrl.hostname,
    port: dbUrl.port,
    database: dbUrl.pathname.slice(1),
    ssl: {
      rejectUnauthorized: false,
      require: true
    }
  });

  async function testConnection() {
    try {
      await client.connect();
      const res = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
      console.log('Tables:', res.rows);
    } catch (err) {
      console.error('Connection error:', err);
    } finally {
      await client.end();
    }
  }

  testConnection();
} catch (err) {
  console.error('Error parsing DATABASE_URL:', err.message);
  console.log('Make sure your DATABASE_URL is in the format: postgresql://user:password@host:port/database');
  process.exit(1);
}
