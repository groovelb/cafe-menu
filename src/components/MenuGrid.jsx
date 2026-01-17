import { Box } from '@mui/material';
import MenuItem from './MenuItem';

const MenuGrid = ({ items, onItemClick }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gap: '1px',
        backgroundColor: '#000',
        border: '1px solid #000',
      }}
    >
      {items.map((item) => (
        <MenuItem key={item.id} item={item} onClick={() => onItemClick(item)} />
      ))}
    </Box>
  );
};

export default MenuGrid;
