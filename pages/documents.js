import React, { useEffect, useState, useRef } from "react";
import { BarLoader } from "react-spinners";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getDocs, uploadDoc, reset } from "@redux/slices/Documents";
import base64ToObjectUrl from "@utils/base64ToObjectUrl";
import { Search } from "@components/search/Search";
import { Dropdown } from "@components/dropdown/Dropdown";
import { Tables } from "@components/table/Table";

function Documents() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { documents, toDownload, toDownloadName, loading, error, message } =
    useSelector((state) => state.documents);
  const [file, setFile] = useState(null);
  const fileInput = useRef();
  const dowloadElement = useRef();
  const router = useRouter();
  // No Document Style
  const noDocStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Getting Docs
  useEffect(() => {
    if (user) dispatch(getDocs());
  }, [user]);

  // Uploading File
  useEffect(() => {
    if (file) dispatch(uploadDoc({ file }));
  }, [file]);

  // Clearing File on success
  useEffect(() => {
    if (message === "file uploaded") {
      setFile(null);
      dispatch(reset());
    }
  }, [message]);

  // Downloading File
  useEffect(() => {
    if (message === "file downloaded") {
      dowloadElement.current.href = base64ToObjectUrl(toDownload);
      dowloadElement.current.download = toDownloadName;
      dowloadElement.current.click();
      dispatch(reset());
    }
  }, [message]);

  // Returning to home
  useEffect(() => {
    if (!user) router.push("/");
  }, [user]);

  const onFileInput = () => {
    fileInput.current.click();
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row mt-4">
          <div className="col ">
            {loading || error || !Boolean(documents.length) ? (
              <></>
            ) : (
              <Search />
            )}
          </div>
          <div className="col d-none d-sm-flex d-flex flex-row-reverse">
            <Dropdown file={file} setFile={onFileInput} />
            {/* <button onClick={onSubmit}>upload</button> */}
            <input
              type="file"
              name=""
              ref={fileInput}
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
              id=""
            />
            <a
              style={{ display: "none" }}
              href={""}
              download="file"
              ref={dowloadElement}
            ></a>
          </div>
        </div>
        <div className="row mt-4" style={{ minHeight: "75vh" }}>
          <div
            className="col"
            style={
              loading || error || !Boolean(documents.length) ? noDocStyle : null
            }
          >
            {loading ? (
              <BarLoader color="#537895" />
            ) : error ? (
              <p
                style={{
                  textAlign: "center",
                  color: "#ff4b4b",
                  maxWidth: "150px",
                }}
              >
                An Error Occoured <br />
                Details: {message}
              </p>
            ) : Boolean(documents.length) ? (
              <Tables documents={documents} />
            ) : (
              <NoDocuments />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Documents;

const NoDocuments = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <img src="/icons/nodoc-icon.svg" alt="" width={"83px"} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <h2 style={{ margin: "0", fontSize: "20px", fontWeight: "bolder" }}>
          No Documents
        </h2>
        <p style={{ margin: "0", fontSize: "16px", color: "#171717" }}>
          start converting now
        </p>
      </div>
    </div>
  );
};
