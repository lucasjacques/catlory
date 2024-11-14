import React, { useState } from 'react';
import axios from 'axios';

const CalorieForm = () => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/calories', {
        name,
        calories: parseInt(calories),
        date
      });
      alert('Entry added successfully');
      setName('');
      setCalories('');
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to add entry');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Calories Consumed Today:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default CalorieForm;