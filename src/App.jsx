import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import { menuData } from './data/menuData';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuGrid from './components/MenuGrid';
import MenuModal from './components/MenuModal';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />

        <Box
          component="main"
          sx={{
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            padding: { xs: '50px 30px', md: '80px 40px' },
            flex: 1,
          }}
        >
          <MenuGrid items={menuData} onItemClick={handleItemClick} />
        </Box>

        <Footer />

        <MenuModal open={modalOpen} onClose={handleCloseModal} item={selectedItem} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
