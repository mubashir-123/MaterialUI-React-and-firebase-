import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({title, deletetodo, update}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>

        <Typography className='fs-3 text-primary' sx={{ mb: 1.5}} color="text.secondary">
        {title}
        </Typography>

      </CardContent>

      <CardActions>

        <Button size="small" variant="contained" color='error' onClick={deletetodo}>Delete</Button>
        <Button size="small" variant="contained" color='success' onClick={update}>Update</Button>

      </CardActions>
    </Card>
  );
}