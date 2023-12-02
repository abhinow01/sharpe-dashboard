import React from 'react';
import { Typography, Button, Container, Grid } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h2" gutterBottom>
            Welcome to Our Website!
          </Typography>
          <Typography variant="body1" paragraph>
            We provide solutions for...
            {/* Add a brief description of your services or what the website offers */}
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
