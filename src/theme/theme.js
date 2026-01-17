import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 300,
      letterSpacing: '0.3em',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 400,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '0.95rem',
      fontWeight: 300,
      lineHeight: 1.8,
      letterSpacing: '0.05em',
    },
    body2: {
      fontSize: '0.85rem',
      fontWeight: 300,
      letterSpacing: '0.15em',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 300,
      letterSpacing: '0.15em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});
