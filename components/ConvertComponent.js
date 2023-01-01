import FileUpload from "@components/fileUpload/FileUpload";
import UploadFile from "@components/uploadFile/UploadFile";
import Editable from "@components/editable/Editable";
import Api from "@constants/ApiUrls";
import Converting from "@components/converting/Converting";
import DownloadFile from "@components/downloadFile/DownloadFile";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import base64ToObjectUrl from "@utils/base64ToObjectUrl";
import Toast from "./allToasts/AllToasts";
import Meta from "@constants/ConversionMeta";
import axios from "axios";

const ConvertComponent = ({ meta }) => {
  const dowloadElement = useRef();
  let downloadFileName = "";
  const router = useRouter();
  const { id } = router.query;

  // data
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState({
    conversion: "",
    src: "",
    tgt: "",
  });
  // Status
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [converted, setConverted] = useState(false);
  const [editable, setEditable] = useState(null);

  useEffect(() => {
    if (file) {
      // setting input file type
      const idx = file.name.lastIndexOf(".");
      setInfo({
        conversion: Meta[id].conversion,
        src: file.name.slice(idx + 1, file.name.length),
        tgt: Meta[id].tgtType,
      });
    }
  }, [file]);

  useEffect(() => {
    if (file && info.conversion) {
      // Checking for input file type
      if (!meta.srcType.includes(info.src)) {
        setFile(null);
        return Toast.warning(meta.wrongInput);
      }
      onSubmit();
    }
  }, [info]);

  const onSubmit = async () => {
    try {
      const form = new FormData();
      form.append("file", file, file.name);
      form.append("conversionType", info.conversion);
      form.append("meta", JSON.stringify({ src: info.src, tgt: info.tgt }));

      const config = {
        onUploadProgress: (progressEvent) => {
          const percentage = (progressEvent.loaded * 100) / progressEvent.total;
          if (percentage === 100) {
            setUploaded(true);
          }
          setProgress(percentage.toFixed(2));
        },
        headers: { "Content-Type": "multipart/form-data" },
      };
      const res = await axios.post(Api.convert, form, config);
      console.log(res);
      dowloadElement.current.href = base64ToObjectUrl(res.data.file);
      dowloadElement.current.download = res.data.fileName;
      downloadFileName = res.data.fileName;
      setConverted(true);
      setProgress(0);
    } catch (error) {
      console.log(error);
      onReset();
      const message = error?.response?.data.detail?.message ?? error.message;
      Toast.error(message);
    }
  };

  const download = () => {
    dowloadElement.current.click();
    onReset();
  };

  // Resetting on route change
  useEffect(() => {
    onReset();
  }, [id]);

  function onReset() {
    setFile(null);
    setProgress(0);
    setEditable(null);
    setUploaded(false);
    setEditable(null);
    setConverted(false);
  }
  return (
    <section className="bg-light" id="file-uploading-form-section">
      <div
        className="container  py-3 pt-5"
        id="file-uploading-form"
        style={{ minHeight: "480px" }}
      >
        {/* Download File element ( After conversion ) */}
        <a
          style={{ display: "none" }}
          href={""}
          download="file"
          ref={dowloadElement}
        ></a>
        {/* ------------------------------------------ */}
        <h2 className="text-capitalize text-center mb-5 d-flex justify-content-center align-items-center">
          <img
            src={meta?.icon}
            width="35px"
            alt=""
            srcSet=""
            className="mx-3"
          />
          <span style={{ fontWeight: "700" }}>
            {meta?.src} to {meta?.tgt} Converter
          </span>
        </h2>
        {!file ? (
          <UploadFile meta={meta} setFile={setFile} />
        ) : !uploaded ? (
          <FileUpload meta={meta} bar={progress} />
        ) : // :  meta?.tgt === "Word" && !editable ? (
        //   <Editable
        //     meta={meta}
        //     filename={file?.name}
        //     setEditable={setEditable}
        //   />
        // )
        !converted ? (
          <Converting meta={meta} filename={file?.name} />
        ) : (
          <DownloadFile
            meta={meta}
            filename={dowloadElement.current.download}
            isEditable={editable === "editable"}
            handleDownload={download}
            handleReset={onReset}
          />
        )}
      </div>
    </section>
  );
};

export default ConvertComponent;
