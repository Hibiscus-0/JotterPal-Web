import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/700.css"; // Bold
import "@fontsource/poppins/900.css"; // Extra Bold

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

export default theme;
