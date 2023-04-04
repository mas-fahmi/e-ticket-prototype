import { Button, TextField, Typography, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editData, editDataTiket } from "../../store/features/dataSlice";
import "./penukaran.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



const ModalComponent = ({ isEdit = false, id, closeModal, row }) => {
  const [open, setOpen] = React.useState(isEdit);
  const [verification, setVerification] = useState("");
  //   const handleOpen = () => setOpen(isEdit);
  const handleClose = () => closeModal(false);
  const dispatch = useDispatch();
  console.log(row)
  const param = {};
  const handleSave = async (event) => {
    event.preventDefault();
    let dataval = row;
    param.data = dataval;
    param.data.verification = verification;
    dispatch(editDataTiket(param));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="title">
            <Typography variant="h5" color="light" align="center">
              Verifikasi Penukaran Tiket
            </Typography>
          </div>
          <div className="title">
            <Typography color="light" align="justify">
              Verifikasi Tiket yang telah ditukar.
            </Typography>
            <TextField
              label="Verification"
              value={verification}
              onChange={(e) => setVerification(e.target.value)}
              margin="normal"
              variant="filled"
              color="info"
              focused
            />
          </div>
          <div className="footer">
            <Button color="success"  onClick={handleSave}>Telah Ditukar</Button>
          </div>
        </Box>
      </Modal>
    </div>
    // <Modal
    //     open={openModal}
    //     onClose={handleClose}
    // 
    //     <Box sx={style}>

    //     </Box>
    // </Modal>
  );
};

export default ModalComponent;
