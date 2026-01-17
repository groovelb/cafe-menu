import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid #000',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      <Typography variant="caption">
        &copy; 2024 CLASSIC CAFE MENU
      </Typography>
    </Box>
  );
};

export default Footer;
