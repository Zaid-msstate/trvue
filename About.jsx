import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';

function About() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, minHeight: 'calc(100vh - 64px)', bgcolor: 'transparent' }}>
      <Paper elevation={0} sx={{
        p: { xs: 3, md: 6 },
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255,255,255,0.2)',
        border: '1px solid rgba(255,255,255,0.3)',
        borderRadius: 4,
        color: 'inherit'
      }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Trvue
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" gutterBottom>
          At Trvue, we believe clarity is the foundation of growth. Small businesses deserve the same access, speed, and confidence in sourcing as the world’s biggest players. We empower entrepreneurs by removing friction from global trade. Our mission is simple: to empower small businesses, enable global trade, and turn opportunities into results.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
          What We Do
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body1">
            <strong>Smarter Sourcing</strong> – Connect with vetted suppliers and distributors.
          </Typography>
          <Typography variant="body1">
            <strong>Clear Market Insights</strong> – Stay ahead with curated signals and trend intelligence.
          </Typography>
          <Typography variant="body1">
            <strong>Growth Connections</strong> – Build meaningful partnerships that scale your business.
          </Typography>
          <Typography variant="body1">
            <strong>Clarity at Every Step</strong> – No guesswork, no wasted time.
          </Typography>
        </Stack>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
          Our Philosophy
        </Typography>
        <Typography variant="body1">
          Small businesses are the backbone of innovation. We’re not just a platform—we’re your partner in growth.
        </Typography>
      </Paper>
    </Box>
  );
}

export default About;
