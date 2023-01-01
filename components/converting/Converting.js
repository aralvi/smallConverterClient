import React from "react";

const Converting = ({ meta, filename }) => {
  return (
    <div>
      <p className="text-center">
        Convert {meta?.src} file to {meta?.tgt} file
      </p>
      <div className=" container">
        <div className="row">
          <div
            className="col-12 bg-white py-2 border border-2"
            style={{
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "0.375rem",
            }}
          >
            <p style={{ maxWidth: "50%" }}>helloworld</p>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <img
                src={meta?.srcIcon}
                width={meta?.src === "PDF" ? 80 : 60}
                alt=""
              />
              <img src="/icons/arrow.svg" alt="" />
              <img
                src={meta?.tgtIcon}
                width={meta?.tgt === "PDF" ? 80 : 60}
                alt=""
              />
            </div>
            <p>Converting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converting;
