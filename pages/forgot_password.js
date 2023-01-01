import React, { useState } from "react";
import axios from "axios";
import Api from "@constants/ApiUrls";
import Toast from "@components/allToasts/AllToasts";
import EmailValidator from "@utils/emailValidator";
import styles from "@styles/Login.module.css";
import Link from "next/link";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!EmailValidator(email))
      return Toast.warning("Please provide correct Email");
    try {
      Toast.loading("Sending Mail");
      const res = await axios.post(Api.forgetPass, { email });
      if (res.status === 200) {
        return Toast.success("Mail sent. Check in spam if it's not there");
      }
    } catch (error) {
      const message =
        error?.response?.data?.detail?.message ??
        error.message ??
        error.toString();
      console.log(error);
      Toast.error(message);
    }
  };
  return (
    <>
      <div class="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 col-sm-12">
            <div class="card  m-auto">
              <div class="card-header bg-537895 text-white text-center py-3">
                <h3 className={styles.heading}>Forgot Password</h3>
                <p className={styles.subheading}>
                  Enter your email and you will get instructions to reset your
                  password.
                </p>
                <img src="icons/key.svg" width="100px" alt="" />
              </div>
              <div class="card-body pb-5">
                <div className={`w-75 m-auto ${styles.width}`}>
                  <form onSubmit={onSubmit}>
                    <div class="form-floating my-3">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        required
                        id="floatingInputGrid"
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label for="floatingInputGrid">Email</label>
                      <span class="invalid-feedback" role="alert">
                        <strong>email error message</strong>
                      </span>
                    </div>

                    <input
                      type="submit"
                      class="form-control
                          form-control-lg bg-537895 text-white"
                      value="Send email"
                    />
                    <div className="row text-end">
                      <p className="mt-2" style={{ fontSize: "14px" }}>
                        Already have an account?&nbsp;&nbsp;
                        <Link
                          href="/login"
                          className="cl-537895
                          text-decoration-none "
                        >
                          <span className="px-1 text-primary">Login</span>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
