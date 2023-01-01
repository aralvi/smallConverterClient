import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";

export const Search = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText>
          <span className="border bg-whie">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </InputGroupText>
        <Input placeholder="Search Documents" />
      </InputGroup>
    </>
  );
};
