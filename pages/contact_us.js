import styles from "../styles/Contact_Us.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";

function ContactUs() {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col">
            <h2 className="text-center fw-bold">Contact us</h2>
            <p className="text-center" style={{ fontSize: "16px" }}>
              We would love to hear from you! Please fill out this form and we
              will get in touch with you shortly
            </p>
          </div>
        </div>
      </div>
      {/* Contact Us Form */}

      <div className={`container mt-4 mb-4 p-4  ${styles.formBg}`}>
        <form action="">
          <div className="row mt-2 mb-2">
            {/* First Name */}
            <div className="col-lg-6">
              <div className="input-group mb-3">
                <span className="input-group-text bg-white p-3">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputFName"
                    placeholder="First Name"
                  />
                  <label for="floatingInputFName">First Name</label>
                </div>
              </div>
            </div>
            {/* Last Name */}
            <div className="col-lg-6">
              <div className="input-group mb-3">
                <span className="input-group-text bg-white p-3">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputLName"
                    placeholder="Username"
                  />
                  <label for="floatingInputLName">Last Name</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2 mb-2">
            {/* Email Address */}

            <div className="col-lg-6">
              <div className="input-group mb-3">
                <span className="input-group-text bg-white p-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputEmailAdd"
                    placeholder="Email Address"
                  />
                  <label for="floatingInputEmailAdd">Email Address</label>
                </div>
              </div>
            </div>
            {/* Email Subject */}
            <div className="col-lg-6">
              <div className="input-group mb-3">
                <span className="input-group-text bg-white p-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputEmailSubj"
                    placeholder="Email Subject"
                  />
                  <label for="floatingInputEmailSubj">Email Subject</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2 mb-2">
            <div className="col">
              {/* <!-- Message input --> */}
              <div className="form-floating">
                <textarea
                  style={{ height: "30vh" }}
                  id="floatingTextarea2"
                  className="form-control"
                ></textarea>
                <label for="floatingTextarea2">Discription</label>
                <p className={styles.align}>0 of 1000 max characters</p>
              </div>
              {/* Check Box */}

              <div className={`mb-3 form-check col-lg-3 ${styles.check}`}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I am not a robot
                </label>
              </div>
              {/* Submit */}
              <button type="submit" className={`btn  ${styles.submitbtn}`}>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
