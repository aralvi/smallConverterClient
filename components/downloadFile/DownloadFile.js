import React from "react";
import styles from "./DownloadFile.module.css";

const DownloadFile = ({
  meta,
  filename,
  isEditable,
  handleDownload,
  handleReset,
}) => {
  return (
    <div>
      <p className="text-center">
        Convert {meta?.src} file to {meta?.tgt} file
      </p>
      <div className="container">
        <div className="row">
          <div
            className={`col-12 bg-white border border-2 ${styles.conversion_container}`}
          >
            <p className="">
              Converted your {meta?.src} file to {isEditable && "Editable"}{" "}
              {meta?.tgt} file
            </p>
            <div className={`${styles.conversion_inner_container}`}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <img
                  src={meta?.tgtIcon}
                  width={meta?.tgt === "PDF" ? 50 : 30}
                  alt=""
                />
                <p style={{ margin: "0" }}>{filename ?? "filename.pdf"}</p>
              </div>
              <div className={`${styles.buttons_div}`}>
                <button onClick={handleDownload}>
                  <img src="/icons/share.svg" alt="" /> Share
                </button>
                <button onClick={handleDownload}>
                  <img src="/icons/drive.svg" alt="" /> Google Drive
                </button>
                <button onClick={handleDownload}>
                  <img src="/icons/dropbox.svg" alt="" /> Dropbox
                </button>
                <button onClick={handleDownload}>
                  <img src="/icons/url.svg" alt="" /> Url
                </button>
                <button
                  className={styles.download_button}
                  onClick={handleDownload}
                >
                  <img src="/icons/download1.svg" alt="" /> download
                </button>
                {/* <button onClick={handleReset}>convert more</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadFile;
