import { createTheme } from '@mui/material/styles';
import { indigo,teal,grey } from '@mui/material/colors';

export default function Theme() {
const theme = createTheme({
    palette: {
    primary: {
      main: indigo[900],
      light: '#e3f2fd',
    
    },
    secondary: {
      main: teal[500],
    },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
});
return theme;
}