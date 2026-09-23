import express from 'express';
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q;
  // VULNERABILITY: Reflected XSS
  res.send(`<h1>Search results for: ${query}</h1>`);
});
