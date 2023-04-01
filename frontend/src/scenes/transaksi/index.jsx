import {
  Alert,
  Box,
  Button,
  createTheme,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
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
import ModalComponent from "./Modal";
import DataTable from "react-data-table-component";
import SearchIcon from "@mui/icons-material/Search";
// const Transaksi = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [id, setId] = useState(null);
//   const [isEdit, setIsEdit] = useState(false);
//   const [row, setRow] = useState();

//   const dispatch = useDispatch();
//   const { data } = useSelector((state) => state.data);

//   useEffect(() => {
//     dispatch(getData());
//   }, []);

//   const columns = [
//     { field: "id", headerName: "No" },
//     {
//       field: "id_ticket",
//       headerName: "Id_Ticket",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "nik",
//       headerName: "NIK",
//       flex: 1,
//     },
//     {
//       field: "name",
//       headerName: "Nama",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "email",
//       headerName: "email",
//       flex: 1,
//     },
//     // {
//     //   field: "payments",
//     //   headerName: "Payments",
//     //   flex: 1,
//     // },
//     {
//       field: "date",
//       headerName: "Date",
//       flex: 1,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       flex: 1,
//       headerAlign: "center",
//       renderCell: ({ row: { action } }) => {
//         return (
//           <Box
//             width="100%"
//             m="0 auto"
//             p="5px"
//             display="flex"
//             justifyContent="center"
//             backgroundColor={
//               action.verification === "Di Bayar"
//                 ? colors.greenAccent[600]
//                 : colors.greenAccent[700]
//             }
//             borderRadius="4px"
//           >
//             {action.verification === "Di Bayar" && (
//               <AdminPanelSettingsOutlinedIcon />
//             )}
//             {action.verification === "Blm Bayar" && <LockOpenOutlinedIcon />}
//             {/* <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
//               {verification}
//             </Typography> */}
//             <Button
//               color="inherit"
//               size="small"
//               onClick={() => {
//                 setIsEdit(true);
//                 setRow(row);
//                 setId(action.id_ticket);
//               }}
//             >
//               {action.verification}
//             </Button>
//           </Box>
//         );
//       },
//     },
//   ];

//   var x = 1;

//   const rows = data.map((item) => ({
//     id: x++,
//     id_ticket: item.id_ticket,
//     nik: item.nik,
//     name: item.name,
//     email: item.email,
//     payments: item.payments,
//     date: item.date,
//     action: item,
//   }));

//   // console.log(rows, "rows");
//   // console.log(data, "data");
//   return (
//     <Box m="20px">
//       <Header title="Transaksi" subtitle="Manage Transaksi" />

//       <Box
//         m="auto 2% 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[800],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[500],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[800],
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${colors.grey[100]} !important`,
//           },
//         }}
//       >
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//       {isEdit ? (
//         <ModalComponent closeModal={setIsEdit} isEdit={isEdit} row={row} />
//       ) : null}
//     </Box>
//   );
// };

// export default Transaksi;

const Transaksi = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const [isEdit, setIsEdit] = useState(false);
  const [row, setRow] = useState();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {

  }, [search])
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Id_Ticket",
      selector: (row) => row.id_ticket,
      style: {
        color: colors.greenAccent[300],
      },
    },
    {
      name: "nik",
      selector: (row) => row.nik,
    },
    {
      name: "nama",
      selector: (row) => row.name,
      style: {
        color: colors.greenAccent[300],
      },
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Payments",
      selector: (row) => row.payments,
      style: {
        color: colors.greenAccent[300],
      },
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Verification",
      selector: (row) => row.verification,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <Button
          color="info"
          onClick={() => {
            setIsEdit(true);
            setRow(row);
          }}
        >
          EDit
        </Button>
      ),
    },
  ];

  const datas = data.map((item) => {
    return {
      id: item.id,
      id_ticket: item.id_ticket,
      nik: item.nik,
      name: item.name,
      email: item.email,
      payments: item.payments,
      date: item.date,
      verification: item.verification,
      action: item,
    };
  });

  const customStyle = {
    rows: {
      style: {
        // fontSize: "10px",
        fontWeight: "bold",
        backgroundColor: colors.primary[500],
      },
    },
    headCells: {
      style: {
        fontSize: "15px",
        fontWeight: "bold",
        backgroundColor: colors.blueAccent[800],
        padding: "5px",
      },
    },
    pagination: {
      style: {
        backgroundColor: colors.blueAccent[800],
      },
    },
  };
  const [records, setRecords] = useState(datas)
  function handleFilter(event) {
    const newData = records.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }
  return (
    <Box m="20px">
      <Header title="Transaksi" subtitle="Manage Transaksi" />
      <Box display="flex" justifyContent="flex-end" margin="auto">
        <Box
          display="flex"
          backgroundcolor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Search"
            onChange={handleFilter}
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <DataTable
        columns={columns}
        data={records}
        pagination
        highlightOnHover
        pointerOnHover
        fixedHeader
        fixedHeaderScrollHeight="400px"
        theme={2 === 1 ? "dark" : "dark"}
        customStyles={customStyle}
      ></DataTable>
      {isEdit ? (
        <ModalComponent closeModal={setIsEdit} isEdit={isEdit} row={row} />
      ) : null}
    </Box>
  );
};

export default Transaksi;
