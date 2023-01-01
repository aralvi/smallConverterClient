import React from "react";
import Accordian from "./accordian/Accordian";
import { Faqs } from "./faqs/Faqs";

const HowToConvert = ({ meta }) => {
  return (
    <>
      <div className="container my-5">
        <h4 className="text-center mb-5">
          How To Convert A {meta?.src} To {meta?.tgt} Online:
        </h4>
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center mb-sm-3">
            <div className="">
              <img src="/icons/instructions.svg" alt="" srcSet="" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center conversion-steps">
            <div>
              <p>
                <strong>Step 1:</strong>&nbsp;&nbsp; these are the steps for
                conversion
              </p>
              <p>
                <strong>Step 2:</strong>&nbsp;&nbsp; these are the steps for
                conversion
              </p>
              <p>
                <strong>Step 3:</strong>&nbsp;&nbsp; these are the steps for
                conversion
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto row text-center">
        <div className="col-lg-4 col-md-6 d-flex justify-content-center col-sm-12 mb-md-4 mb-sm-5">
          <div style={{ maxWidth: "300px" }}>
            <img
              src="/icons/lock-filled.svg"
              width="40"
              height="40"
              className="mb-3"
              alt="icon"
              srcSet=""
            />
            <p className="fw-bolder">Private Processing</p>
            <p>
              All processing is done on your device locally. No files are
              uploaded nor stored in the server.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex justify-content-center col-sm-12 mb-md-4 mb-sm-5">
          <div style={{ maxWidth: "300px" }}>
            <img
              src="/icons/file-converter.svg"
              width="40"
              height="40"
              className="mb-3"
              alt="icon"
              srcSet=""
            />
            <p className="fw-bolder">Quick and Easy</p>
            <p>
              No registration is needed to use our server. Convert and download
              your files within seconds.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex justify-content-center col-sm-12 mb-md-4 mb-sm-5">
          <div style={{ maxWidth: "300px" }}>
            <img
              src="/icons/pc.svg"
              width="40"
              height="40"
              className="mb-3"
              alt="icon"
              srcSet=""
            />
            <p className="fw-bolder">Platform Friendly</p>
            <p>
              Our service works on all devices - compatible with Mac, Windows,
              Linux, iOS, and Android
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Faqs />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToConvert;
