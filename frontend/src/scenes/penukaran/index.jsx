import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getDataTiket } from "../../store/features/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Penukaran = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getDataTiket());
  }, []);

  const columns = [
    { field: "id", headername: "ID", flex: 0.5 },
    {
      field: "id_ticket",
      headername: "Id_Ticket",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "nik",
      headername: "Nik",
      flex: 1,
    },
    {
      field: "name",
      headername: "Nama",
      flex: 1,
    },
    {
      field: "address",
      headername: "Alamat",
      flex: 1,
    },
    {
      field: "verification",
      headername: "Verifikasi",
      flex: 1,
    },
  ];

  const rows = data.map((item) => ({
    id: item.id,
    id_ticket: item.id_ticket,
    nik: item.nik,
    name: item.name,
    address: item.address,
    payments: item.verification,
  }));

  return (
    <Box m="20px">
      <Header title="Penukaran" subtitle="Manage Penukaran" />
      <Box
        m="auto 7% 0 0"
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Penukaran;
