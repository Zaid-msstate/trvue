

import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, Button, Container, Paper } from '@mui/material';
import About from './About';
import Contact from './Contact';

import { List, ListItem } from '@mui/material';

function Home() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', background: '#fff', px: { xs: 2, sm: 4, md: 8 }, py: { xs: 4, sm: 8 }, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowX: 'hidden' }}>
      <Paper elevation={0} sx={{
        backdropFilter: 'blur(24px)',
        background: 'rgba(255,255,255,0.7)',
        borderRadius: '2rem',
        boxShadow: '0 4px 32px rgba(10,23,78,0.08)',
        p: { xs: 2, sm: 4, md: 6 },
        maxWidth: { xs: '100%', sm: '38rem' },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        border: 'none',
        justifyContent: 'center',
      }}>
  <img src="/thelogo.svg" alt="Trvue logo" style={{ height: '56px', marginBottom: '2rem' }} />
        <Typography variant="h2" sx={{ fontWeight: 700, color: '#111', mb: 2, textAlign: 'center', fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem' } }}>Source globally with zero friction.</Typography>
        <Typography variant="h5" sx={{ color: '#222', mb: 2, textAlign: 'center' }}>Trvue is where small businesses meet verified resources, market clarity, and a smarter way to grow.</Typography>
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, color: '#ffd600', mb: 3, textAlign: 'center' }}>Minimal overhead. Maximum clarity.</Typography>
        <List sx={{ listStyle: 'none', p: 0, maxWidth: { xs: '100%', sm: '28rem' }, m: 0, display: 'grid', gap: 2 }}>
          <ListItem sx={{ background: '#fffbe6', borderRadius: '1rem', p: '1.5rem 2rem', border: '1px solid #ffd600', color: '#111', fontWeight: 500 }}>✔ Verified suppliers & resources</ListItem>
          <ListItem sx={{ background: '#fffbe6', borderRadius: '1rem', p: '1.5rem 2rem', border: '1px solid #ffd600', color: '#111', fontWeight: 500 }}>✔ Real-time trends & market signals</ListItem>
          <ListItem sx={{ background: '#fffbe6', borderRadius: '1rem', p: '1.5rem 2rem', border: '1px solid #ffd600', color: '#111', fontWeight: 500 }}>✔ Connections that fuel long-term growth</ListItem>
          <ListItem sx={{ background: '#fffbe6', borderRadius: '1rem', p: '1.5rem 2rem', border: '1px solid #ffd600', color: '#111', fontWeight: 500 }}>✔ Faster, smarter sourcing</ListItem>
        </List>
        <Button component={Link} to="/request" variant="contained" sx={{
          mt: 4,
          py: 1.5,
          px: 4,
          borderRadius: '2rem',
          background: 'linear-gradient(90deg,#ffd600,#fffbe6)',
          color: '#111',
          fontWeight: 700,
          fontSize: '1.1rem',
          boxShadow: '0 2px 8px rgba(10,23,78,0.08)',
          textTransform: 'none',
          width: '100%',
          maxWidth: '16rem',
          mx: 'auto',
          '&:hover': { background: 'linear-gradient(90deg,#fffbe6,#ffd600)' }
        }}>
          Tell us what you need. We’ll find the way.
        </Button>
      </Paper>
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg,#fffbe6 0%,#fff 100%)', color: '#111', fontFamily: 'Inter, Arial, sans-serif', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" elevation={0} sx={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #eee', boxShadow: 'none' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, minHeight: '80px' }}>
            <Button component={Link} to="/" sx={{ p: 0, minWidth: 0, background: 'none' }}>
              <img src="/thelogo.svg" alt="Trvue logo" style={{ height: '40px' }} />
            </Button>
            <Button component={Link} to="/" sx={{ color: '#111', fontWeight: 500, fontSize: '1.1rem', background: 'none', textTransform: 'none', mx: 2 }}>Home</Button>
            <Button component={Link} to="/about" sx={{ color: '#111', fontWeight: 500, fontSize: '1.1rem', background: 'none', textTransform: 'none', mx: 2 }}>About</Button>
            <Button component={Link} to="/contact" sx={{ color: '#111', fontWeight: 500, fontSize: '1.1rem', background: 'none', textTransform: 'none', mx: 2 }}>Contact</Button>
            <Button component={Link} to="/request" variant="contained" sx={{
              borderRadius: '2rem',
              background: 'linear-gradient(90deg,#ffd600,#fffbe6)',
              color: '#111',
              fontWeight: 700,
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(10,23,78,0.08)',
              textTransform: 'none',
              ml: 2,
              '&:hover': { background: 'linear-gradient(90deg,#fffbe6,#ffd600)' }
            }}>Get Started</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add Request page here */}
        </Routes>
        <Box component="footer" sx={{ width: '100%', textAlign: 'center', fontSize: '1rem', color: '#aaa', borderTop: '1px solid #eee', py: 4, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)' }}>
          <div>© {new Date().getFullYear()} Trvue. All rights reserved.</div>
          <div style={{ marginTop: '0.5rem', color: '#ffd600' }}>Minimal sourcing. Maximum clarity. Built for modern business.</div>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App
