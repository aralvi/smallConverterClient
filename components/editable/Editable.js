import { useState } from "react";

const Editable = ({ setEditable, meta, filename }) => {
  const [value, setValue] = useState(null);
  const submit = () => {
    if (!value) {
      return;
    }
    value === "no" ? setEditable("editable") : setEditable("noteditable");
  };
  return (
    <div>
      <p className="text-center">
        Convert {meta?.src} file to {meta?.tgt} file
      </p>
      <div className=" container">
        <div className="row">
          <div className="col-4 text-center bg-white py-5 border border-2 h-100">
            <img src={meta?.srcIcon} width="60" alt="" srcSet="" />
            <p className="file-name">{filename}</p>
          </div>
          <div className="col-8 ">
            <div className="row ms-0 bg-light h-100">
              <div className="col-6 h-75 py-3">
                <div className="form-check border h-75 bg-F9FDFF ps-5 pt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="no"
                    style={{ cursor: "pointer" }}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="exampleRadios1"
                    style={{ cursor: "pointer" }}
                  >
                    Convert to Word
                  </label>
                </div>
              </div>
              <div className="col-6 h-75 py-3">
                <div className="form-check border h-75 bg-F9FDFF ps-5 pt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="yes"
                    style={{ cursor: "pointer" }}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="exampleRadios2"
                    style={{ cursor: "pointer" }}
                  >
                    Convert to Editable Word
                  </label>
                </div>
              </div>
              <div className="col-12 h-25">
                <button
                  className="form-control bg-537895 text-white"
                  value="yes"
                  onClick={submit}
                >
                  Convert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editable;
