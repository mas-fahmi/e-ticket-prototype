import {
  Box,
  Button,
  useTheme,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Header from "../../components/Header";
import { getData } from "../../store/features/dataSlice";
import  ModalComponent  from "./Modal";

const Transaksi = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const columns = [
    { field: "id", headerName: "No" },
    {
      field: "id_ticket",
      headerName: "Id_Ticket",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "nik",
      headerName: "NIK",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Nama",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "address",
      headerName: "Alamat",
      flex: 1,
    },
    // {
    //   field: "payments",
    //   headerName: "Payments",
    //   flex: 1,
    // },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "verification",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { verification } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              verification === "Di Bayar"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {verification === "Di Bayar" && <AdminPanelSettingsOutlinedIcon />}
            {verification === "Blm Bayar" && <LockOpenOutlinedIcon />}
            {/* <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {verification}
            </Typography> */}
            <Button color="inherit" size="small" onClick={() => setIsEdit(true)}>
              {verification}
            </Button>
   
          </Box>
        );
      },
    },
  ];

  var x = 1;

  const rows = data.map((item) => ({
    id: x++,
    id_ticket: item.id_ticket,
    nik: item.nik,
    name: item.name,
    address: item.address,
    payments: item.payments,
    date: item.date,
    verification: item.verification,
  }));

  console.log(rows, "rows");
  // console.log(data, "data");
  return (
    <Box m="20px">
      <Header title="Transaksi" subtitle="Manage Transaksi" />
      
      <Box
        m="auto 2% 0 0"
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
      {isEdit ? <ModalComponent closeModal={setIsEdit} isEdit={isEdit}/> : null}
    </Box>
  );
};

export default Transaksi;