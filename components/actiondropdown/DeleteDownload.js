import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteDoc } from "@redux/slices/Documents";

const DeleteDownload = ({ open, setOpen, docName, docId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Modal isOpen={open} toggle={() => {}}>
        <ModalHeader toggle={() => setOpen(false)}>Delete File</ModalHeader>
        <ModalBody>{docName} ?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setOpen(false)}>
            No
          </Button>
          <Button
            color="primary"
            onClick={() => {
              setOpen(false);
              dispatch(deleteDoc({ docId }));
            }}
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteDownload;
