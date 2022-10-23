import React from "react";

const useModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return {
    open,
    handleClickOpen,
    handleClose,
  };
};

export default useModal;
