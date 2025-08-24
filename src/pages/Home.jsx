import { Box, Typography, List, ListItem } from '@mui/material';

function Home() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>Source globally with zero friction.</Typography>
      <Typography variant="body1" gutterBottom>
        Trvue is where small businesses meet verified resources, market clarity, and a smarter way to grow.
        Minimal overhead. Maximum clarity.
      </Typography>
      <List>
        <ListItem>✔ Verified suppliers & resources</ListItem>
        <ListItem>✔ Real‑time trends & market signals</ListItem>
        <ListItem>✔ Connections that fuel long‑term growth</ListItem>
        <ListItem>✔ Faster, smarter sourcing</ListItem>
      </List>
      <Typography variant="h6" sx={{ mt: 2 }}>Tell us what you need. We’ll find the way.</Typography>
    </Box>
  );
}

export default Home;
