require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL Database');
});

const app = express();
app.use(cors());
app.use(express.json());

// API endpoint to insert calorie data
app.post('/api/calories', (req, res) => {
  const { name, calories } = req.body;
  const query = 'INSERT INTO calorie_entries (name, calories) VALUES (?, ?)';

  db.query(query, [name, calories], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Server error');
      return;
    }
    res.status(200).send('Entry added successfully');
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});