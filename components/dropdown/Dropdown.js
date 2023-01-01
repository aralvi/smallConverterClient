import React from "react";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Toast from "@components/allToasts/AllToasts";

import Styles from "./Dropdown.module.css";

const onUpload = () => {
  Toast.info("This feature is under development. It'll be available soon");
};

export const Dropdown = ({ file, setFile, ...args }) => {
  return (
    <>
      <UncontrolledDropdown group>
        <Button type="button" className={Styles.btndropdown}>
          Upload
        </Button>
        <DropdownToggle caret className={Styles.btndropdownicon} />
        <DropdownMenu className="m-2" {...args} >
          <DropdownItem onClick={setFile}>
            <span className="p-2">
              <img src="icons/computer.svg" alt="" srcSet="" />
            </span>
            From Device
          </DropdownItem>
          <DropdownItem onClick={setFile}>
          <span className="p-2">
              <img src="icons/dropbox.svg" alt="" srcSet="" />
            </span>
            Dropbox
          </DropdownItem>
          <DropdownItem onClick={setFile}>
          <span className="p-2">
              <img src="icons/gdrive.svg" alt="" srcSet="" />
            </span>
            Google Drive
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};
