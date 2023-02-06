import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import BorrowRepay from './BorrowRepay';
import { useState } from "react";
import "./BorrowRepay.scss";



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  backdropFilter: "blur(4px)",
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
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
            position: 'absolute',
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
  const [confirm, setConfirm] = useState (false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="none" onClick={handleClickOpen} sx={{
        borderRadius:'8px', 
        fontFamily:  'Inter',
        textTransform: 'none',
        fontSize: '16px'
        }}>
        {props.name}
      </Button>
      <div className={confirm? null: 'modalHide'}>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps = {{
            style: {borderRadius:25}
        }}
      >
        <div style={{height: 'fit-content' , width: 'fit-content'}}>
          {/* insert your component here */}
          <BorrowRepay handleClose={handleClose} name={props.name} confirm={confirm} setConfirm={setConfirm}/>
        </div>  
      </BootstrapDialog>
      </div>
    </div>
  );
}
