import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import {
  Paper,
  Box,
  Typography,
  Button,
  TextField,
  CircularProgress,
  styled,
} from '@material-ui/core';
import { GET_WEATHER } from '../graphql/get-weather';
import WeatherCard from '../components/WeatherCard';

const StyledPaper = styled(Paper)({
  height: '400px',
  padding: '6em',
  backgroundColor: '#eee',
});

const Title = styled(Typography)({
  fontSize: '48px',
  color: '#39FF14',
  fontWeight: 500,
  marginBottom: '6rem',
  textAlign: 'center'
});

export default function Weather() {
  const [city, setCity] = useState('');
  const [getWeather, { loading, data }] = useLazyQuery(GET_WEATHER, {
    variables: { name: city },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };
  return (
    <form onSubmit={handleSubmit}>
      <StyledPaper elevation={2} height='100vh'>
        <Title variant='h1'>
          GraphQL Weather App
        </Title>
        <Box marginBottom='2rem'>
          <TextField
            placeholder='Search by City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button
            type='submit'
            style={{ marginLeft: '20px' }}
            variant='contained'
            color='primary'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>

        {data?.getCityByName && <WeatherCard {...data.getCityByName} />}
        {loading && <CircularProgress size={24} color='primary' />}
      </StyledPaper>
    </form>
  );
}
