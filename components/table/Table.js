import { Table } from "reactstrap";
import React, { useState } from "react";
import styles from "./Table.module.css";
import { Tooldropdown } from "@components/tooldropdown/Tooldropdown";
import { Actiondropdown } from "@components/actiondropdown/Actiondropdown";
import FileIcons from "@constants/FileIcons";
export const Tables = ({ documents }) => {
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th className="p-4">Name</th>
            <th className={`p-4 ${styles.hide}`}>Size </th>
            <th className={`p-4 ${styles.hide}`}>Data </th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => {
            return (
              <tr key={doc.fileId}>
                <td className="p-4">
                  <span>
                    <img
                      src={FileIcons[doc.fileType] || FileIcons.any}
                      alt=""
                      height="30vh"
                    />
                  </span>
                  <span className="p-2">
                    {doc.fileName}
                    {doc.fileType}
                  </span>
                </td>
                <td className={`p-4 ${styles.hidden}`}>{doc.fileSize}</td>
                <td className={`p-4 ${styles.hidden}`}>{doc.createdAt}</td>
                <td className="p-4">
                  <div className="d-flex">
                    <Tooldropdown
                      fileId={doc.fileId}
                      fileName={doc.fileName}
                      fileType={doc.fileType}
                    />
                    <Actiondropdown
                      fileId={doc.fileId}
                      fileName={doc.fileName}
                      fileType={doc.fileType}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
