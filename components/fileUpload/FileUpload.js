import styles from "./FileUpload.module.css";
import { Progress } from "reactstrap";
import { useEffect, useState, useRef } from "react";

const FileUpload = ({ meta, bar }) => {
  const [barValue, setBarValue] = useState(0);

  useEffect(() => {
    let timer;
    if (barValue < 100) {
      timer = setTimeout(() => {
        setBarValue((prev) => prev + 1);
      }, 70);
    }
    return () => clearTimeout(timer);
  }, [barValue]);
  return (
    <div className="row" id="file-uploading">
      <p className="text-center">Convert to {meta?.tgt}</p>
      <div
        className="d-flex px-0 justify-content-center align-items-center flex-column border"
        style={{ borderRadius: "0.375rem" }}
      >
        <Progress
          striped
          value={bar}
          style={{
            height: "8px",
            padding: "0",
            width: "100%",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
          }}
        />
        <img className="py-5" src={meta?.srcIcon} alt="" srcSet="" />
        <p>
          Uploading (<small className="counter">{bar}%</small>)
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
