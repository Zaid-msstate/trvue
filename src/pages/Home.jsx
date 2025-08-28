import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Verified Suppliers & Resources',
    description: 'Connect with trusted partners, distributors, and manufacturers around the world.',
  },
  {
    title: 'Real-Time Insights & Trends',
    description: 'Stay ahead with curated signals and market intelligence.',
  },
  {
    title: 'Growth Connections',
    description: 'Build meaningful partnerships that scale your business long term.',
  },
  {
    title: 'Clarity at Every Step',
    description: 'No guesswork, no wasted time—just seamless sourcing.',
  },
];

function Home() {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 3,
        py: 6,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
        Source globally with zero friction.
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, maxWidth: 700 }}>
        Trvue is where small businesses meet verified resources, market clarity, and a smarter way to
        grow. Minimal overhead. Maximum clarity.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 5, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button
          variant="contained"
          component={Link}
          to="/get-started"
          sx={{ px: 4, py: 1.5, borderRadius: 3, textTransform: 'none' }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to="/about"
          sx={{ px: 4, py: 1.5, borderRadius: 3, textTransform: 'none' }}
        >
          Learn More
        </Button>
      </Box>
      <Grid container spacing={3} sx={{ maxWidth: 1000 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body1">{feature.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
