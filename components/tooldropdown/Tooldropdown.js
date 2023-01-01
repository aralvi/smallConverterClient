import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { convertDoc } from "@redux/slices/Documents";
import SupportedConversions from "@constants/SupportedConversions";
import Meta from "@constants/ConversionMeta";

export const Tooldropdown = ({ fileName, fileType, fileId, ...args }) => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const submit = (conversionType, tgt) => {
    dispatch(
      convertDoc({
        fileId,
        fileName,
        fileType,
        conversionType,
        src: fileType.slice(1, fileType.length),
        tgt,
      })
    );
  };
  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
        <DropdownToggle className="bg-light text-dark">
          <span className="p-1">
            <img src="/icons/tools.svg" alt="tools-menu" />
          </span>
          <span> Tools</span>
        </DropdownToggle>
        <DropdownMenu {...args}>
          {SupportedConversions[fileType]?.map((conversion, i) => {
            return (
              <DropdownItem
                key={i}
                onClick={() => {
                  submit(Meta[conversion].conversion, Meta[conversion].tgtType);
                  console.log("hello");
                }}
              >
                <span className="p-2">
                  <img src={Meta[conversion].icon} width="24px" />
                </span>
                {Meta[conversion].srcType} To {Meta[conversion].tgtType}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
