import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import SettingsOutlinedIcon from "@mui/icons-material/Settings";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const Logout = async() =>{
    try{
      await axios.delete('http://localhost:3001/logoutAdmin');
      navigate("/")
    }catch (error){
      console.log(error);
    }
  }
  return (
    <Box display="flex" justifyContent="space-between" p={2} margin="auto">
      {/* SearchBar */}
      <Box
        display="flex"
        backgroundcolor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICON */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon/>
            ): (
                <LightModeOutlinedIcon/>
            )}
        </IconButton>
        <IconButton onClick={Logout}>
            <LogoutOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
