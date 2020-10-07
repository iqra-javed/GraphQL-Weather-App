import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  styled,
} from '@material-ui/core';
import { AcUnit, WbSunny } from '@material-ui/icons';

const StyledCard = styled(Card)({
  width: '300px',
});

const CityName = styled(Typography)({
  fontSize: '24px',
  fontWeight: 500,
  color: 'green',
});

const Label = styled(Typography)({
  fontSize: '16px',
  color: '#303030',
});

const DataWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const ColdIcon = styled(AcUnit)({
  color: '#add8e6',
  marginLeft: '15px',
});

const WarmIcon = styled(WbSunny)({
  color: 'gold',
  marginLeft: '15px',
});

export default function WeahterCard({
  name,
  weather: {
    temperature: { actual, feelsLike, min, max },
  },
}) {
  return (
    <StyledCard>
      <CardContent>
        <CityName>{name}</CityName>
        <Divider />
        <DataWrapper>
          <Label>Actual:</Label>
          <Typography>{`${actual} F`}</Typography>
        </DataWrapper>
        <DataWrapper>
          <Label>Feels Like:</Label>
          <Typography>{`${feelsLike} F`}</Typography>
        </DataWrapper>
        <DataWrapper>
          <Label>Min:</Label>
          <Box display="flex">
            <Typography>{`${min} F`}</Typography>
            <ColdIcon />
          </Box>
        </DataWrapper>
        <DataWrapper>
          <Label>Max:</Label>
          <Box display="flex">
            <Typography>{`${max} F`}</Typography>
            <WarmIcon />
          </Box>
        </DataWrapper>
      </CardContent>
    </StyledCard>
  );
}
