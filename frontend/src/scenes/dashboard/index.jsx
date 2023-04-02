import { Box, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expired, setExpired] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3001/showAdmin");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      console.log(decoded);
      setName(decoded.name);
      setExpired(decoded.exp);
    } catch (error) {
        // console.log(error);
    //   navigate("/");
    }
  };

//   const axiosJWT = axios.create();

//   axiosJWT.interceptors.request.use(async(config) =>{
//     const currentDate = new Date();
//     if(expired * 1000 < currentDate.getTime()){
//         const response = await axios.get("http://localhost:3001/showAdmin"),
//         setToken(response.data.accessToken);
//         const decoded = jwt_decode(response.data.accessToken);
//         setName(decoded.name);
//         setExpired(decoded.exp)
//     } 
//     return config;
//   }, (error) =>{
//     return Promise.reject(error);
//   })

//   const getUsers = async () =>{
//     const response = await axios.get('http://localhost:3001/showAdmin', {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });
//     console.log(response.data);
//   }
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DASHBOARD"
          subtitle="Welcome to E-Ticket Anda telah berhasil login"
        />
        {/* <Button color="info" onClick={getUsers}>Get Users</Button> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
