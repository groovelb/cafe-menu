import { Box, Typography } from '@mui/material';
import { cafeInfo } from '../data/menuData';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        padding: { xs: '60px 30px 50px', md: '80px 40px 60px' },
        textAlign: 'center',
        borderBottom: '1px solid #000',
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          letterSpacing: { xs: '0.2em', md: '0.3em' },
          marginBottom: '20px',
        }}
      >
        {cafeInfo.title}
      </Typography>
      <Typography variant="body2" component="address" sx={{ fontStyle: 'normal' }}>
        {cafeInfo.address}
      </Typography>
    </Box>
  );
};

export default Header;
