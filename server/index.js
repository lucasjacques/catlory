require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '1337DONTSTEALMYPASSWORD', // Replace with your MySQL password
  database: 'calorie_tracker'
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
  const { calories } = req.body;
  const query = 'INSERT INTO calorie_entries (calories) VALUES (?)';

  db.query(query, [calories], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Server error');
      return;
    }
    res.status(200).send('Calories added successfully');
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});