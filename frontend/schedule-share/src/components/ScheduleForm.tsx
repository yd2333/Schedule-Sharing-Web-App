import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Stack,
  Typography,
  Alert,
} from '@mui/material';
import axios from 'axios';

const ScheduleForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    start_time: '',
    end_time: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/schedules', formData);
      navigate('/');
    } catch (err) {
      setError('Failed to create schedule');
      console.error('Error creating schedule:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Typography variant="h4">Create Schedule</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <TextField
          label="Start Time"
          name="start_time"
          type="datetime-local"
          value={formData.start_time}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          label="End Time"
          name="end_time"
          type="datetime-local"
          value={formData.end_time}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Create Schedule
        </Button>
      </Stack>
    </form>
  );
};

export default ScheduleForm;
