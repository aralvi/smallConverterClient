import styles from "./UploadFile.module.css";
import Toast from "@components/allToasts/AllToasts";

const UploadFile = ({ meta, setFile }) => {
  return (
    <div id="file-selection">
      <p className="text-center">
        Quick and easy way to convert your {meta?.src} to <br />
        {meta?.tgt === "Word" && "editable"}
        &nbsp;
        {meta?.tgt} document
      </p>
      <div className="d-flex flex-column">
        <div className=" m-auto col-sm-12 col-md-6 col-lg-3">
          <label
            htmlFor="browse-file"
            className="btn btn-lg border form-control bg-537895 text-white"
          >
            <img src="/icons/desktop.svg" alt="" /> Choose File
          </label>
          <input
            id="browse-file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ visibility: "hidden" }}
            type="file"
          />
        </div>
        <div className=" m-auto col-sm-12 col-md-6 col-lg-3">
          <label
            htmlFor="dropbox-file"
            className="btn btn-lg border form-control"
            onClick={() => Toast.success("helloworld")}
          >
            <img src="/icons/dropbox.svg" alt="" /> Dropbox
          </label>
          <input
            id="dropbox-file"
            className="form-control"
            style={{ visibility: "hidden" }}
          />
        </div>
        <div className=" m-auto col-sm-12 col-md-6 col-lg-3">
          <label
            htmlFor="drive-file"
            className="btn btn-lg border form-control"
          >
            <img src="/icons/drive.svg" alt="" /> Google Drive
          </label>
          <input
            id="drive-file"
            className="form-control"
            style={{ visibility: "hidden" }}
            type="file"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
