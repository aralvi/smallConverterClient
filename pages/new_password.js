import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from "@styles/Login.module.css";
import Toast from "@components/allToasts/AllToasts";
import axios from "axios";
import Api from "@constants/ApiUrls";

function NewPassword() {
  const { user, token } = useSelector((state) => state.auth);
  const router = useRouter();
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!(password === cPassword))
      return Toast.warning("Password Doesn't Match");
    try {
      Toast.loading("Resetting Password");
      const res = await axios.post(
        Api.newPass,
        { password },
        { headers: { token } }
      );
      if (res.status === 200) {
        return Toast.success("Password Reset Successfully");
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

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-2"></div>

          <div className="col-lg-8 col-sm-12">
            <div className="card  m-auto">
              <div className="card-header bg-537895 text-white text-center py-3">
                <h3 className={styles.heading}>Create a New Password</h3>
                <p className={styles.subheading}>
                  Type and confirm a secure new password for the account.
                </p>
                <img src="icons/reset.svg" width="100px" alt="" />
              </div>
              <div className="card-body pb-5">
                <div className={`w-75 m-auto ${styles.width}`}>
                  <form onSubmit={onSubmit}>
                    <div className="form-floating mt-4">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        defaultValue=""
                        required
                        autocomplete="current-password"
                        id="floatingInputGrid"
                        placeholder="*******"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label for="floatingInputGrid">New Password</label>
                      <span className="invalid-feedback" role="alert">
                        <strong>error message</strong>
                      </span>
                    </div>
                    {/* New pass */}
                    <div className="form-floating mt-4 d-flex">
                      <input
                        type={passwordShown ? "text" : "password"}
                        className="form-control pt-4 w-100"
                        name="new-password"
                        defaultValue=""
                        required
                        autocomplete="new-password"
                        id="floatingInputGrid"
                        placeholder="*******"
                        onChange={(e) => setCPassword(e.target.value)}
                        style={{
                          borderTopRightRadius: "0",
                          borderBottomRightRadius: "0",
                        }}
                      />
                      <label for="floatingInputGrid">Confirm Password</label>
                      <span
                        onClick={togglePassword}
                        toggle="new-password-field"
                        className="p-3 border flex-shrink-1"
                        style={{
                          borderLeftWidth: "0",
                          borderTopRightRadius: "6px",
                          borderBottomRightRadius: "6px",
                        }}
                      >
                        <FontAwesomeIcon icon={faEyeSlash} />
                      </span>
                    </div>
                    <input
                      type="submit"
                      className="form-control
                          form-control-lg bg-537895 mt-4 text-white"
                      value="Login in with new password"
                      disabled={!password || !cPassword}
                    />
                    <p
                      style={{ fontSize: "14px", textAlign: "right" }}
                      className="mt-2"
                    >
                      Already have an account?&nbsp;&nbsp;
                      <Link
                        href="/login"
                        className="cl-537895
                          text-decoration-none "
                      >
                        <span className="px-1 text-primary">Login</span>
                      </Link>
                    </p>
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

export default NewPassword;
