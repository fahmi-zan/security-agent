const express = require('express');
const { Client } = require('pg');

const app = express();
const client = new Client();
client.connect();

app.get('/user', async (req, res) => {
  const userId = req.query.id;
  
  // VULNERABILITY: Raw SQL string concatenation (SQLi)
  // Semgrep should flag this
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  const result = await client.query(query);
  
  res.json(result.rows);
});
