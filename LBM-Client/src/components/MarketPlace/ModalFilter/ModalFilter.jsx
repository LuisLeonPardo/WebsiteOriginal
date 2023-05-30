import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Filters from "./Filters";
import { useState } from "react";
import Vector from "../assets/Vector.svg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  backdropFilter: "blur(4px)",
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        variant="none"
        onClick={handleClickOpen}
        sx={{}}
        style={{
          display: "flex",
          alignItems: "center",
          background: "#48b343",
          padding: "11px 24px",
          borderRadius: "9999px",
          gap: "12px",
          cursor: "pointer",
        }}
      >
        <img src={Vector} />
        <h2
          style={{
            margin: "0",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "18px",
            color: "#fcfcfd",
          }}
        >
          Filter
        </h2>
      </div>
      <div className={confirm ? null : "modalHide"}>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          PaperProps={{
            style: {
              borderRadius: "12px",
              overflow: "hidden",
              maxWidth: "none",
              maxHeight: "none",
            },
          }}
        >
          <div style={{ height: "fit-content", width: "fit-content" }}>
            {/* insert your component here */}
            <Filters
              handleClose={handleClose}
              name={props.name}
              confirm={confirm}
              setConfirm={setConfirm}
            />
          </div>
        </BootstrapDialog>
      </div>
    </div>
  );
}
