import { createTheme } from '@mui/material/styles';
import { indigo,teal } from '@mui/material/colors';

export default function Theme() {
const theme = createTheme({
    palette: {
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: teal[500],
    },
  },
});
return theme;
}