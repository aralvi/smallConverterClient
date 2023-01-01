import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import Script from "next/script";
import { LoginSignup } from "@redux/slices/Auth";
import styles from "@styles/Login.module.css";
import { Faqs } from "@components/faqs/Faqs";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(LoginSignup({ data: form, method: "login" }));
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

  // for button text: https://stackoverflow.com/questions/72400330/how-to-customize-a-new-google-signin-button
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
          <div className="col-lg-8 col-sm-12">
            <div
              className="card  m-auto"
              style={{ backgroundColor: "#F9F9F9 " }}
            >
              <div className="card-header bg-537895 text-white text-center  p-4">
                <h3 className={styles.heading}>
                  Login to Small Converter Tools
                </h3>
                <p className={styles.subheading}>
                  Hey, enter your detail to get login to your account.
                </p>
                <img src="icons/profile.svg" width="100px" alt="" />
              </div>
              <div className="card-body pb-5">
                <div className={`w-75 m-auto ${styles.width}`}>
                  <div className="row">
                    <div className="col-lg-6 p-2 flex-grow-1 d-flex justify-content-center">
                      <div id="google-button"></div>
                    </div>
                  </div>
                  <form action="login" onSubmit={submitHandler}>
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
                        <strong>error message</strong>
                      </span>
                    </div>
                    <div className="form-floating ">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={form.password}
                        onChange={formHandler}
                        required
                        id="floatingInputGrid"
                        placeholder="*******"
                      />
                      <label htmlFor="floatingInputGrid">Password</label>
                      <span
                        toggle="#password-field"
                        className="fa fa-fw
                                    fa-eye field-icon toggle-password"
                      ></span>
                      <span className="invalid-feedback" role="alert">
                        <strong>error message</strong>
                      </span>
                    </div>

                    <a
                      className="mt-2 btn-link float-end mb-3 cl-537895
                                text-decoration-none"
                      href="forgot_password"
                    >
                      <span
                        style={{ fontSize: "14px" }}
                        className="text-primary "
                      >
                        {" "}
                        Forgot Password?
                      </span>
                    </a>

                    <input
                      style={{ borderRadius: "4px" }}
                      type="submit"
                      className="form-control form-control-lg bg-537895 text-white"
                      value="Login"
                    />
                    <p className="mt-2" style={{ fontSize: "14px" }}>
                      Don&apos;t have an account?&nbsp;&nbsp;
                      <Link
                        href="/signup"
                        className="cl-537895 text-decoration-none"
                      >
                        <span className="text-primary"> Sign Up</span>
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

export default Login;
