import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { updateDoc } from "@redux/slices/Documents";
const Renamemodal = ({ open, setOpen, docName, setDocName, docId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalHeader toggle={() => setOpen(false)}>Rename File</ModalHeader>
        <ModalBody>
          <input
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
            type="text"
            size={50}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => {
              setOpen(false);
              dispatch(updateDoc({ docId, docName }));
            }}
          >
            Rename
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Renamemodal;
