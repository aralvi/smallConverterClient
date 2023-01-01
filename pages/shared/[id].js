import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { BarLoader } from "react-spinners";
import axios from "axios";
import FileIcons from "@constants/FileIcons";
import Api from "@constants/ApiUrls";
import base64ToObjectUrl from "@utils/base64ToObjectUrl";
import Toast from "@components/allToasts/AllToasts";
import styles from "@styles/Shared.module.css";

const Shared = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    loading,
    error,
    message,
    fileName,
    fileType,
    downloadRef,
    downloadButton,
  } = useShared(id);

  return (
    <section className={styles.container}>
      {/* Download file Element */}
      <DownloadElement downloadRef={downloadRef} />
      {/* --------------------- */}
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={message} />
      ) : (
        <Download
          fileName={fileName}
          fileType={fileType}
          downloadBtn={downloadButton}
        />
      )}
    </section>
  );
};

export default Shared;

const useShared = (docId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState({
    fileId: "",
    userId: "",
    fileType: "",
    fileName: "",
  });
  const downloadRef = useRef();

  const downloadButton = () => {
    if (
      downloadRef.current.href !== "" &&
      downloadRef.current.href !== window.location.href
    ) {
      downloadRef.current.click();
    } else {
      downloadDoc();
    }
  };

  useEffect(() => {
    const getDoc = async () => {
      downloadRef.current.href = "";
      if (!docId) {
        return;
      }
      try {
        setLoading(true);
        const res = await axios.post(Api.getshared, { docId });
        const doc = res.data.docs;
        setFile({
          fileId: doc.fileId,
          userId: doc.userId,
          fileType: doc.fileType,
          fileName: doc.fileName,
        });
      } catch (error) {
        console.log(error);
        const message =
          error?.response?.data?.detail?.message ??
          error?.response?.data?.detail[0]?.message ??
          error.message ??
          error.toString();
        setError(true);
        setMessage(message);
      } finally {
        setLoading(false);
      }
    };
    getDoc();
  }, [docId]);

  const downloadDoc = async () => {
    try {
      Toast.loading("Downloading File");
      const res = await axios.post(Api.downloadshared, {
        fileId: file.fileId,
        userId: file.userId,
        fileType: file.fileType,
      });
      downloadRef.current.href = base64ToObjectUrl(res.data.file);
      downloadRef.current.download = file.fileName + file.fileType;
      Toast.success("File Downloaded");
      downloadRef.current.click();
    } catch (error) {
      console.log(error);
      const message =
        error?.response?.data?.detail?.message ??
        error?.response?.data?.detail[0]?.message ??
        error.message ??
        error.toString();
      Toast.error(message);
    }
  };

  return {
    loading,
    error,
    message,
    downloadRef,
    fileName: file.fileName + file.fileType,
    fileType: file.fileType,
    downloadButton,
  };
};

const Loading = () => {
  return <BarLoader color="#537895" />;
};

const Error = ({ message }) => {
  return (
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
  );
};

const Download = ({ fileType, fileName, downloadBtn }) => {
  return (
    <div className={styles.download_div}>
      <img src={FileIcons[fileType]} />
      <p>{fileName}</p>
      <button className={styles.download_button} onClick={downloadBtn}>
        <img src="/icons/download1.svg" alt="" /> <span>Download</span>
      </button>
    </div>
  );
};

const DownloadElement = ({ downloadRef }) => {
  return (
    <a
      style={{ display: "none" }}
      href=""
      download="file"
      ref={downloadRef}
    ></a>
  );
};
