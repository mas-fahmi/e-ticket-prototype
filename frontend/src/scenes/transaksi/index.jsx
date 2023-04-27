import {
  Box,
  Button,
  IconButton,
  InputBase,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { getData } from "../../store/features/dataSlice";
import ModalComponent from "./Modal";
import DataTable from "react-data-table-component";
import SearchIcon from "@mui/icons-material/Search";

const Transaksi = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const [isEdit, setIsEdit] = useState(false);
  const [row, setRow] = useState();

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  // console.log(query);

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {}, [search]);
  const columns = [
    {
      name: "No",
      selector: (row) => row.id,
    },
    {
      name: "ID Penukaran",
      selector: (row) => row.id_ticket,
      style: {
        color: colors.greenAccent[300],
      },
    },
    // {
    //   name: "nik",
    //   selector: (row) => row.nik,
    // },
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
  var x = 1;
  const datas = data.map((item) => {
      return {
        id: x++,
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

  const searchs = (data) => {
    return data.filter(
      (item) =>
        item.id_ticket.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query)
    );
  };
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
            onChange={(e) => setQuery(e.target.value)}
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <DataTable
        columns={columns}
        data={searchs(datas)}
        pagination
        highlightOnHover
        pointerOnHover
        fixedHeader
        fixedHeaderScrollHeight="350px"
        theme={2 === 1 ? "dark" : "dark"}
        customStyles={customStyle}
      />
      {isEdit ? (
        <ModalComponent closeModal={setIsEdit} isEdit={isEdit} row={row} />
      ) : null}
    </Box>
  );
};

export default Transaksi;
