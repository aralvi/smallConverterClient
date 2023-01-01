import React from "react";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { downloadDoc } from "@redux/slices/Documents";
import Toast from "@components/allToasts/AllToasts";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Renamemodal from "@components/actiondropdown/Renamemodal";
import DeleteDownload from "@components/actiondropdown/DeleteDownload";

export const Actiondropdown = ({ fileId, fileName, fileType, ...args }) => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [renameModal, setRenameModal] = useState(false);
  const [renameInput, setRenameInput] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const renameToggle = () => {
    setRenameModal(true);
    setRenameInput(fileName);
  };

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
        <DropdownToggle className="bg-transparent text-dark border-0">
          <span className="">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </span>
        </DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem onClick={() => dispatch(downloadDoc({ fileId }))}>
            <span className=" d-flex align-items-center">
              <img src={"/icons/download.svg"} className="pe-2" />
              <span>Download</span>
            </span>
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              navigator.clipboard.writeText(
                process.env.NEXT_PUBLIC_APP_URL + `shared/${fileId}`
              );
              Toast.info("Link Copied to Clipboard");
            }}
          >
            <span className=" d-flex align-items-center">
              <img src={"/icons/share1.svg"} className="pe-2" />
              <span>Share</span>
            </span>
          </DropdownItem>
          <DropdownItem>
            <span
              onClick={renameToggle}
              className=" bg-transparent border-0 text-dark d-flex align-items-center"
            >
              <img src={"/icons/rename.svg"} className="pe-2" />
              <span>Rename</span>
            </span>
          </DropdownItem>
          <DropdownItem>
            <span
              onClick={() => setDeleteModal(true)}
              className=" bg-transparent border-0 text-dark d-flex align-items-center"
            >
              <img src={"/icons/delete.svg"} className="pe-2" />
              <span>Delete</span>
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {/* Modals */}
      <Renamemodal
        open={renameModal}
        setOpen={setRenameModal}
        docName={renameInput}
        setDocName={setRenameInput}
        docId={fileId}
      />
      <DeleteDownload
        open={deleteModal}
        setOpen={setDeleteModal}
        docId={fileId}
        docName={fileName + fileType}
      />
    </div>
  );
};
