import { Box, Typography, List, ListItem } from '@mui/material';

function About() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>About Trvue</Typography>
      <Typography variant="h5" gutterBottom>Global Trade. Made Clear.</Typography>
      <Typography variant="body1" gutterBottom>
        At Trvue, we believe clarity is the foundation of growth. Small businesses deserve the same access,
        speed, and confidence in sourcing as the world’s biggest players — and we’re here to make that possible.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We empower entrepreneurs by removing friction from global trade. From finding the right suppliers and
        distributors to uncovering real‑time market trends, Trvue delivers verified resources, trusted insights,
        and powerful connections that help you act with certainty.
      </Typography>
      <Typography variant="h5" gutterBottom>What We Do</Typography>
      <List>
        <ListItem>Smarter Sourcing – Connect with vetted suppliers, manufacturers, and distributors you can trust.</ListItem>
        <ListItem>Clear Market Insights – Stay ahead with curated signals, trend intelligence, and data you can act on.</ListItem>
        <ListItem>Growth Connections – Build meaningful partnerships that scale your business beyond borders.</ListItem>
        <ListItem>Clarity at Every Step – No guesswork, no wasted time — just direct paths to success.</ListItem>
      </List>
      <Typography variant="h5" gutterBottom>Our Philosophy</Typography>
      <Typography variant="body1">
        Small businesses are the backbone of innovation. Yet, they face barriers: lack of access, slow processes,
        and limited clarity. Trvue was built to change that. We’re not just a platform — we’re your partner in
        growth — helping you see opportunities clearly, move faster, and compete on a global scale.
      </Typography>
    </Box>
  );
}

export default About;
