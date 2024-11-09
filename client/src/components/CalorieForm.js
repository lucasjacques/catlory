import React, { useState } from 'react';
import axios from 'axios';

const CalorieForm = () => {
  const [calories, setCalories] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/calories', { calories: parseInt(calories) });
      alert('Calories added successfully');
      setCalories('');
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to add calories');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Calories Consumed Today:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default CalorieForm;