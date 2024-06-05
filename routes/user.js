const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get user profile
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'SELECT * FROM users WHERE id = ?';
  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error('Error querying user:', err);
      res.status(500).send('Server error');
    } else if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).send('User not found');
    }
  });
});

// Update user profile
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { username, password } = req.body;
  const sql = 'UPDATE users SET username = ?, password = ? WHERE id = ?';
  db.query(sql, [username, password, userId], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Server error');
    } else {
      res.send('User updated successfully');
    }
  });
});

module.exports = router;
