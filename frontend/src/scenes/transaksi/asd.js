const Transaksi = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.data);
  
    const [isEdit, setIsEdit] = useState(false);
    const [row, setRow] = useState();
    useEffect(() => {
      dispatch(getData());
    }, []);
  
    const columns = [
      {
        name: "Id",
        selector: (row) => row.id,
      },
      {
        name: "Id_Ticket",
        selector: (row) => row.id_ticket,
      },
      {
        name: "nik",
        selector: (row) => row.nik,
      },
      {
        name: "nama",
        selector: (row) => row.name,
      },
      {
        name: "Email",
        selector: (row) => row.email,
      },
      {
        name: "Payments",
        selector: (row) => row.payments,
      },
      {
        name: "Date",
        selector: (row) => row.date,
      },
      {
        name: "Verification",
        selector: (row) => row.verification,
      },
      {
        name: "Action",
        cell: (row) => (
          <Button
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
  
    return (
      <div>
        <h2>asdasasdsa</h2>
        <DataTable columns={columns} data={datas}></DataTable>
        {isEdit ? (
          <ModalComponent closeModal={setIsEdit} isEdit={isEdit} row={row} />
        ) : null}
      </div>
    );
  };
  
  export default Transaksi;