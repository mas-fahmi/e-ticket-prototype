import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Barside";
import Dashboard from "./scenes/dashboard";
import Transaksi from "./scenes/transaksi";
import Penukaran from "./scenes/penukaran";
import User from "./scenes/user";
import "./index.css";
import Login from "./components/Login";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                {/* <Route exact path="/" element={<Login />} /> */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transaksi" element={<Transaksi />} />
                <Route path="/penukaran" element={<Penukaran />} />
                <Route path="/user" element={<User />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
