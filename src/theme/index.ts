import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#044159',
    },
    secondary: {
      main: '#b3971b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;