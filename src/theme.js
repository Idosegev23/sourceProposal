import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2.7rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '2.2rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.4rem',
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '1.2rem',
      lineHeight: 1.6,
    },
  },
  palette: {
    primary: {
      main: '#62238C',
    },
    secondary: {
      main: '#BF4B81',
    },
  },
});

export { theme };