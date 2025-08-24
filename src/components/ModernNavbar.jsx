import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function ModernNavbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'transparent', color: 'inherit', boxShadow: 'none', backdropFilter: 'blur(10px)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        <fontWeight variant="h5" sx={{ fontWeight: 700 }}>
          Trvue
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button component={Link} to="/" sx={{ color: 'text.primary', textTransform: 'none' }}>
            Home
          </Button>
          <Button component={Link} to="/about" sx={{ color: 'text.primary', textTransform: 'none' }}>
            About
          </Button>
          <Button component={Link} to="/contact" sx={{ color: 'text.primary', textTransform: 'none' }}>
            Contact
          </Button>
          <Button variant="contained" component={Link} to="/get-started" sx={{ ml: 2, borderRadius: 3, textTransform: 'none' }}>
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ModernNavbar;
