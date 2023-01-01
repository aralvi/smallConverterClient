import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Script from "next/script";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { LoginSignup } from "@redux/slices/Auth";
import styles from "@styles/Signup.module.css";

function Signup() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const [cPassword, setCPassword] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const formValidator = Boolean(
    form.firstName &&
      form.lastName &&
      form.email &&
      form.password &&
      form.password === cPassword
  );

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGoogleResponse = (response) => {
    let data = jwtDecode(response.credential);
    dispatch(
      LoginSignup({
        data: {
          firstName: data.given_name,
          lastName: data.family_name,
          email: data.email,
        },
        method: "oauth",
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(LoginSignup({ data: form, method: "signup" }));
  };

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      if (typeof window !== undefined && typeof google !== undefined) {
        google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleGoogleResponse,
        });
        google.accounts.id.renderButton(
          document.getElementById("google-button"),
          {
            size: "large",
          }
        );
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);
  return (
    <>
      <Script src="/scripts/google-login.js" />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8  col-sm-12">
            <div className="card m-auto">
              <div className="card-header bg-537895 text-white text-center py-3">
                <h2 className={styles.heading}>
                  Sign up to Small Converter Tools
                </h2>
                <p className={styles.subheading}>
                  Hey, enter your detail to get sign up to your account.
                </p>
                <img src="icons/profile.svg" width="100px" alt="" />
              </div>
              <div
                className="card-body"
                style={{ backgroundColor: "#F9F9F9 " }}
              >
                <div className={`w-75 m-auto ${styles.width}`}>
                  <div className="row">
                    <div className="col-lg-6 p-2 flex-grow-1 d-flex justify-content-center">
                      <div id="google-button"></div>
                    </div>
                  </div>
                  <hr className="align-center" style={{ width: "100%;" }} />
                  <form onSubmit={submitHandler}>
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={form.firstName}
                        onChange={formHandler}
                        required
                        id="floatingInputGrid"
                        placeholder="rehman"
                      />
                      <label htmlFor="floatingInputGrid">First Name</label>
                      <span className="invalid-feedback" role="alert">
                        <strong>First name error message </strong>
                      </span>
                    </div>
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={form.lastName}
                        onChange={formHandler}
                        required
                        id="floatingInputGrid"
                        placeholder="rehman"
                      />
                      <label htmlFor="floatingInputGrid">Last Name</label>
                      <span className="invalid-feedback" role="alert">
                        <strong>last name error message </strong>
                      </span>
                    </div>
                    <div className="form-floating my-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={form.email}
                        onChange={formHandler}
                        required
                        id="floatingInputGrid"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInputGrid">Email</label>
                      <span className="invalid-feedback" role="alert">
                        <strong>email error message</strong>
                      </span>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={form.password}
                        onChange={formHandler}
                        required
                        autocomplete="current-password"
                        id="floatingInputGrid"
                        placeholder="*******"
                      />
                      <label htmlFor="floatingInputGrid">Password</label>
                      <span className="invalid-feedback" role="alert">
                        <strong>password error message</strong>
                      </span>
                    </div>
                    <div className="form-floating my-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password_confirmation"
                        value={cPassword}
                        onChange={(e) => setCPassword(e.target.value)}
                        required
                        id="floatingInputGrid"
                        placeholder="*******"
                      />
                      <label htmlFor="floatingInputGrid">
                        Confirm Password
                      </label>
                      {cPassword !== "" && cPassword !== form.password && (
                        <span style={{ marginTop: "8px", color: "red" }}>
                          password doesn&apos;t match
                        </span>
                      )}
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        required
                        id="flexCheckChecked"
                      />
                      <small
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        By signing up, your are agree to our
                        <Link href="/terms">
                          <span className="px-1 text-primary">
                            {" "}
                            Terms of Use
                          </span>
                        </Link>{" "}
                        <br />
                        and
                        <Link href="/privacy" className="px-2 text-primary">
                          <span className="px-1 text-primary">
                            {" "}
                            Privacy Policy
                          </span>
                        </Link>
                      </small>
                    </div>
                    <button
                      disabled={!formValidator}
                      className="form-control form-control-lg bg-537895
                      text-white"
                    >
                      Sign Up
                    </button>
                    <p style={{ fontSize: "14px" }} className="mt-2">
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

export default Signup;
