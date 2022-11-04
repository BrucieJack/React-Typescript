import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalType } from "../configs/modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  open: boolean;
  handleClose: any;
  data: {};
  config: ModalType[];
}

export default function BasicModal(props: IProps) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.config.map((item) => (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {item.title}: {item.data(props.data)}
            </Typography>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
