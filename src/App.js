import { ColorModeContext, useMode } from "./theme";
import { CssBasline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme = {theme}>
      <CssBasline>
    <div className="App">
      <main className="content"></main>
    </div>
     </CssBasline>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
