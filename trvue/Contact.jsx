import { Box, Typography, Paper, TextField, Button } from '@mui/material';

function Contact() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', background: '#fff', px: { xs: 2, sm: 4, md: 8 }, py: { xs: 4, sm: 8 }, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowX: 'hidden' }}>
      <Typography variant="h3" sx={{ fontWeight: 700, color: '#111', mb: 4, textAlign: 'center', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>Contact Us</Typography>
      <Paper elevation={0} sx={{
        backdropFilter: 'blur(24px)',
        background: 'rgba(255,255,255,0.6)',
        borderRadius: '2rem',
        boxShadow: '0 4px 32px rgba(10,23,78,0.08)',
        p: { xs: 2, sm: 4, md: 6 },
        maxWidth: { xs: '100%', sm: '32rem' },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        border: 'none',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <form action="https://formspree.io/f/xldlqprl" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
          <TextField
            label="Your Name"
            name="name"
            required
            variant="outlined"
            fullWidth
            InputProps={{ style: { borderRadius: '1rem', background: 'rgba(255,255,255,0.85)' } }}
          />
          <TextField
            label="Your Email"
            name="email"
            type="email"
            required
            variant="outlined"
            fullWidth
            InputProps={{ style: { borderRadius: '1rem', background: 'rgba(255,255,255,0.85)' } }}
          />
          <TextField
            label="Your Message"
            name="message"
            required
            multiline
            minRows={5}
            variant="outlined"
            fullWidth
            InputProps={{ style: { borderRadius: '1rem', background: 'rgba(255,255,255,0.85)' } }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: '2rem',
              background: '#ffd600',
              color: '#111',
              fontWeight: 700,
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(10,23,78,0.08)',
              textTransform: 'none',
              width: '100%',
              maxWidth: '16rem',
              mx: 'auto',
              '&:hover': { background: '#ffd600' }
            }}
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Contact;
