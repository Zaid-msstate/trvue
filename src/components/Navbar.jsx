import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', color: 'inherit', boxShadow: 'none', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255, 255, 255, 0.3)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Trvue
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button component={Link} to="/" sx={{ color: 'text.primary', textTransform: 'none', fontSize: '1rem' }}>
            Home
          </Button>
          <Button component={Link} to="/about" sx={{ color: 'text.primary', textTransform: 'none', fontSize: '1rem' }}>
            About
          </Button>
          <Button component={Link} to="/contact" sx={{ color: 'text.primary', textTransform: 'none', fontSize: '1rem' }}>
            Contact
          </Button>
          <Button variant="contained" component={Link} to="/get-started" sx={{ ml: 2, borderRadius: 3, textTransform: 'none', px: 3, py: 1 }}>
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
