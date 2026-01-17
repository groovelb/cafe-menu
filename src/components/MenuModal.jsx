import { Box, Modal, IconButton, Typography } from '@mui/material';

const MenuModal = ({ open, onClose, item }) => {
  if (!item) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
          },
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '600px',
          width: '100%',
          border: '1px solid #000',
          backgroundColor: '#fff',
          position: 'relative',
          outline: 'none',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            border: '1px solid #000',
            borderRadius: 0,
            zIndex: 10,
            '&:hover': {
              backgroundColor: '#000',
              color: '#fff',
            },
          }}
        >
          {'\u00D7'}
        </IconButton>

        <Box
          component="img"
          src={item.image}
          alt={item.name}
          sx={{
            width: '100%',
            aspectRatio: '4 / 3',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
            borderBottom: '1px solid #000',
          }}
        />

        <Box sx={{ padding: { xs: '40px 30px', md: '50px 40px' } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              marginBottom: '20px',
            }}
          >
            {item.name}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '30px' }}>
            {item.description}
          </Typography>
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              paddingTop: '20px',
              borderTop: '1px solid #000',
            }}
          >
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default MenuModal;
