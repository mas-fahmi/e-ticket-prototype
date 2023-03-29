import { Button, TextField, Typography, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./transaksi.css"

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

const ModalComponent = ({ isEdit = false, id, closeModal }) => {
  const [open, setOpen] = React.useState(isEdit);
  //   const handleOpen = () => setOpen(isEdit);
  const handleClose = () => closeModal(false);
  const dispatch = useDispatch();
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
              Verifikasi Pembayaran
            </Typography>
          </div>
          <div className="title">
            <Typography color="light" align="justify">
              Verifikasi pembayaran berdasarkan data dari bukti transaksi.
            </Typography>
          </div>
          <div className="footer">
            <Button color="success">Telah Bayar</Button>
            <Button color="error">Cancel verification</Button>
          </div>
        </Box>
      </Modal>
    </div>
    // <Modal
    //     open={openModal}
    //     onClose={handleClose}
    // >
    //     <Box sx={style}>

    //     </Box>
    // </Modal>
  );
};

export default ModalComponent;
