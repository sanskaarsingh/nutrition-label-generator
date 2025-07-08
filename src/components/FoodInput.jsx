import React, { useState } from 'react';
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import { getNutritionData } from '../api/calorieNinjas';

const FoodInput = ({ onNutritionData }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const data = await getNutritionData(input);
      onNutritionData(data);
    } catch (err) {
      setError('Failed to fetch nutrition data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        fullWidth
        label="Enter food items (e.g., 2 bananas and 1 glass milk)"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
        sx={{ mb: 2 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        startIcon={loading ? <CircularProgress size={20} /> : null}
      >
        {loading ? 'Analyzing...' : 'Generate Nutrition Label'}
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Box>
  );
};

export default FoodInput;