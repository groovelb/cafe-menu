import { Box, Typography } from '@mui/material';

const MenuItem = ({ item, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: '#fff',
        padding: { xs: '30px', md: '40px' },
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt={item.name}
        sx={{
          width: '100%',
          aspectRatio: '1 / 1',
          objectFit: 'cover',
          filter: 'grayscale(100%)',
          marginBottom: '30px',
          border: '1px solid #000',
        }}
      />
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          marginBottom: '10px',
        }}
      >
        {item.name}
      </Typography>
      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight: 300,
          letterSpacing: '0.1em',
        }}
      >
        {item.price}
      </Typography>
    </Box>
  );
};

export default MenuItem;
