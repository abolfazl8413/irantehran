import { TextField } from "@mui/material";
import ChildComponent from "./components/child-component";
import "./styles.css";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// ایجاد یک تم دارک
const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <h1>RTL MUIv5</h1>
        <ChildComponent />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <br />
        <br />
        <TextField id="outlined-basic" label="نوشته فارسی" variant="outlined" />
      </div>
    </ThemeProvider>
  );
}
