import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { getData } from "../../store/features/dataSlice";

const Transaksi = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //getdata
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  

  useEffect(() => {
    dispatch(getData());
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "id_ticket",
      headername: "id_ticket",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "nik",
      headername: "nik",
      flex: 1,
    },
    {
      field: "name",
      headername: "name",
      flex: 1,
    },
    {
      field: "address",
      headername: "address",
      flex: 1,
    },
    {
      field: "payments",
      headername: "payments",
      flex: 1,
    },
    {
      field: "date",
      headername: "date",
      flex: 1,
    },
    {
      field: "access",
      headername: "Acces Level",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  const rows = data.map((item) => ({
    id: item.id,
    id_ticket: item.id_ticket,
    nik: item.nik,
    name: item.name,
    address: item.address,
    payments: item.payments,
    date: item.date,
  }));

  console.log(rows, "rows");
  console.log(data);
  return (
    <Box m="20px">
      <Header title="Transaksi" subtitle="Manage Transaksi" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[500],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[800],
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(rows) => rows.item.id}
        />
      </Box>
    </Box>
  );
};

export default Transaksi;
