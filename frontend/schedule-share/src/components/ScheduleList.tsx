import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import axios from 'axios';

interface Schedule {
  id: number;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
}

const ScheduleList = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schedules');
        setSchedules(response.data);
      } catch (err) {
        setError('Failed to fetch schedules');
        console.error('Error fetching schedules:', err);
      }
    };

    fetchSchedules();
  }, []);

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {schedules.map((schedule) => (
        <Grid item xs={12} sm={6} md={4} key={schedule.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{schedule.title}</Typography>
              <Typography color="textSecondary">{schedule.description}</Typography>
              <Typography variant="body2">
                Start: {new Date(schedule.start_time).toLocaleString()}
              </Typography>
              <Typography variant="body2">
                End: {new Date(schedule.end_time).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ScheduleList;
