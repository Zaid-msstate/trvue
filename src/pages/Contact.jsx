import { Box, Typography, TextField, Button } from '@mui/material';

function Contact() {
  return (
    <Box sx={{ p: 3, maxWidth: 500 }}>
      <Typography variant="h3" gutterBottom>Contact Us</Typography>
      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
      <Button variant="contained" sx={{ mt: 2 }}>Send Message</Button>
    </Box>
  );
}

export default Contact;
