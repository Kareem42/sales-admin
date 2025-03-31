import { ColorModeContext, useMode } from "./theme";
import { CssBasline, ThemeProvider } from "@mui/material";
import { Topbar } from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBasline>
          <div className="App">
            <main className="content">
              <Topbar />
            </main>
          </div>
        </CssBasline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
