import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Uniswap from "./Uniswap";
import "./Uniswap.scss";
import Coin from './Assets/Coin.svg'

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
      <Button
        variant="none"
        onClick={handleClickOpen}
        sx={{
          borderRadius: "8px",
          fontFamily: "Inter",
          textTransform: "none",
          fontSize: "16px",
          width: "100%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '55px'
        }}
        className="btn-open"
      >
        <div style={{width: '100%'}} className="market-table">
          <img src={Coin} />
          <h3 className="coin-name">Bitcoin</h3>
          <div className="danger-status">
            <h4>High</h4>
            <h6>Danger Status</h6>
          </div>
          <div className="last-payment">
            <h5>7 Jun, 21</h5>
            <h6>Last payment</h6>
          </div>
          <div className="balance">
            <h5>-10.24 BTC</h5>
            <h6>Balance</h6>
          </div>
        </div>
      </Button>
      <div className={confirm ? null : "modalHide"}>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          PaperProps={{
            style: { borderRadius: 25 },
          }}
        >
          <div style={{ height: "fit-content", width: "fit-content" }}>
            {/* insert your component here */}
            <Uniswap
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
