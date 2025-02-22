const { db } = require('../lib/db');
const fs = require('fs');
const path = require('path');

async function runMigration() {
  try {
    const sql = fs.readFileSync(path.join(__dirname, '0001_init_tables.sql'), 'utf8');
    await db.execute(sql);
    console.log('Migration executed successfully');
  } catch (error) {
    console.error('Error executing migration:', error);
  }
}

runMigration();
