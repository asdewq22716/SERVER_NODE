const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Register route
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send('Server error');
    } else {
      res.send('User registered successfully');
    }
  });
});

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error querying user:', err);
      res.status(500).send('Server error');
    } else if (results.length > 0) {
      res.send('User logged in successfully');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

module.exports = router;
