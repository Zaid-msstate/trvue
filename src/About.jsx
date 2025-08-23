import { Box, Typography, Paper, List, ListItem } from '@mui/material';

function About() {
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
        gap: 3,
        border: 'none',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography variant="h3" sx={{ fontWeight: 700, color: '#111', mb: 3, textAlign: 'center', fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem' } }}>
          About Trvue
        </Typography>
        <Typography sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' }, color: '#ffd600', fontWeight: 600, mb: 2, textAlign: 'center' }}>
          Global Trade. Made Clear.
        </Typography>
        <Typography sx={{ fontSize: '1.1rem', color: '#222', mb: 3, textAlign: 'center' }}>
          Empowering Small Business, Enabling Global Trade
        </Typography>
        <Box sx={{ color: '#111', mx: 'auto', maxWidth: { xs: '100%', sm: '32rem' } }}>
          <Typography sx={{ mb: 2 }}>
            At Trvue, we believe clarity is the foundation of growth. Small businesses deserve the same access, speed, and confidence in sourcing as the world’s biggest players — and we’re here to make that possible.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            We empower entrepreneurs by removing friction from global trade. From finding the right suppliers and distributors to uncovering real-time market trends, Trvue delivers verified resources, trusted insights, and powerful connections that help you act with certainty.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Our mission is simple: to empower small businesses, enable global trade, and turn opportunities into results.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#111', mt: 4, mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            What We Do
          </Typography>
          <List sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: '1.2rem', mb: 3 }}>
            <ListItem sx={{ background: '#fffbe6', borderRadius: '1rem', p: '1.2rem 1.5rem', border: '1px solid #ffd600', color: '#111', fontWeight: 500 }}>
              Smarter Sourcing – Connect with vetted suppliers, manufacturers, and distributors you can trust.
            </ListItem>
            <ListItem sx={{ background: '#fffbe6', borderRadius: '1rem', p: '1.2rem 1.5rem', border: '1px solid #ffd600', color: '#111', fontWeight: 500 }}>
              Clear Market Insights – Stay ahead with curated signals, trend intelligence, and data you can act on.
            </ListItem>
            <ListItem sx={{ background: '#fffbe6', borderRadius: '1rem', p: '1.2rem 1.5rem', border: '1px solid #ffd600', color: '#111', fontWeight: 500 }}>
              Growth Connections – Build meaningful partnerships that scale your business beyond borders.
            </ListItem>
            <ListItem sx={{ background: '#fffbe6', borderRadius: '1rem', p: '1.2rem 1.5rem', border: '1px solid #ffd600', color: '#111', fontWeight: 500 }}>
              Clarity at Every Step – No guesswork, no wasted time — just direct paths to success.
            </ListItem>
          </List>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#111', mt: 4, mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            Our Philosophy
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Small businesses are the backbone of innovation. Yet, they face barriers: lack of access, slow processes, and limited clarity. Trvue was built to change that.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            We’re not just a platform. We’re your partner in growth — helping you see opportunities clearly, move faster, and compete on a global scale.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default About;
