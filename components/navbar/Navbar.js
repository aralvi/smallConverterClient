import { useEffect, useState } from "react";
import { Dropdown, DropdownMenu, DropdownItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import { logout } from "@redux/slices/Auth";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const [menu, setMenu] = useState(false);
  const [tools, setTools] = useState(false);

  // dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window?.innerWidth);
    }
  }, []);

  // logout
  const handleLogout = () => {
    setDropdownOpen(false);
    dispatch(logout());
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href={"/"} className={styles.heading_container}>
            <picture>
              <source srcSet="icons/logo.svg" media="(min-width: 716px)" />
              <img src="/icons/favicon.svg" alt="logo" />
            </picture>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: width < 520 ? "30px" : width < 640 ? "45px" : "65px",
            }}
          >
            <div
              className={styles.tools_div}
              style={{ padding: "28px 0" }}
              onClick={() => {
                setMenu(false);
                if (width < 768) {
                  setTools((prev) => !prev);
                }
              }}
              onMouseEnter={() => {
                if (width >= 768) setTools(true);
              }}
              onMouseLeave={() => {
                if (width >= 768) setTools(false);
              }}
            >
              <img src="/icons/tools.svg" alt="tools-menu" />
              {width > 640 && <span>Tools</span>}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                style={tools ? { transform: "rotate(180deg)" } : {}}
              >
                <path
                  id="Polygon_1"
                  data-name="Polygon 1"
                  d="M5.143,1.429a1,1,0,0,1,1.715,0l4.234,7.056A1,1,0,0,1,10.234,10H1.766A1,1,0,0,1,.909,8.486Z"
                  transform="translate(12 10) rotate(180)"
                  fill="#171717"
                />
              </svg>
            </div>
            <div className={styles.burger_icon}>
              <img
                src="icons/menu.svg"
                onClick={() => {
                  setMenu((prev) => !prev);
                  setTools(false);
                  setDropdownOpen(false);
                }}
              />
            </div>
            <div className={`${styles.cta_div} ${styles.hide_cta_div}`}>
              {/* If user is present */}
              {user ? (
                <div className={styles.cta_div}>
                  <div
                    onClick={() => router.push("/documents")}
                    className={styles.tools_div}
                  >
                    <img src="/icons/document.svg" alt="document icon" />
                    <span>Document</span>
                  </div>
                  <div className={styles.profile_div}>
                    <span>
                      {user?.firstName[0]}
                      {user?.lastName[0]}
                    </span>
                    {width > 835 && (
                      <div>
                        <Dropdown
                          isOpen={dropdownOpen}
                          toggle={() => {}}
                          direction={"down"}
                        >
                          <div
                            onClick={() =>
                              setDropdownOpen((prevState) => !prevState)
                            }
                            data-toggle="dropdown"
                            aria-haspopup="true"
                          >
                            <img
                              src="/icons/dropdown.svg"
                              alt=""
                              style={{ fontSize: "1.5rem" }}
                            />
                          </div>
                          <DropdownMenu className={styles.dropdown_menu}>
                            <DropdownItem
                              header
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <div className={styles.profile_div}>
                                <span>
                                  {user?.firstName[0]}
                                  {user?.lastName[0]}
                                </span>
                              </div>
                              <p style={{ color: "#171717", margin: "0" }}>
                                {user?.email}
                              </p>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                              onClick={handleLogout}
                            >
                              <img src="/icons/logout.svg" alt="" />
                              <p style={{ color: "#171717", margin: "0" }}>
                                Logout
                              </p>
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className={styles.cta_div}>
                  <Link href={"/login"}>
                    <button className={styles.login}>Log In</button>
                  </Link>
                  <Link href={"/signup"}>
                    <button className={styles.signup}>Sign Up</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={
            menu ? `${styles.fixed_menu} ${styles.show}` : styles.fixed_menu
          }
        >
          <div className={styles.cta_div}>
            {/* <div
              className={styles.tools_div}
              onClick={() => setTools((prev) => !prev)}
            >
              <img src="/icons/tools.svg" alt="tools-menu" />
              <span>Tools</span>
            </div> */}
            {user ? (
              <div className={styles.cta_div}>
                <div
                  onClick={() => router.push("/documents")}
                  className={styles.tools_div}
                >
                  <img src="/icons/document.svg" alt="document icon" />
                  <span>Document</span>
                </div>
                <div className={styles.profile_div}>
                  <span>
                    {user?.firstName[0]}
                    {user?.lastName[0]}
                  </span>
                  {width <= 835 && (
                    <div>
                      <Dropdown
                        isOpen={dropdownOpen}
                        toggle={() => {}}
                        direction={"down"}
                      >
                        <div
                          onClick={() =>
                            setDropdownOpen((prevState) => !prevState)
                          }
                          data-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <img
                            src="/icons/dropdown.svg"
                            style={{ fontSize: "1.5rem" }}
                            alt=""
                          />
                        </div>
                        <DropdownMenu className={styles.dropdown_menu}>
                          <DropdownItem
                            header
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <div className={styles.profile_div}>
                              <span>
                                {user?.firstName[0]}
                                {user?.lastName[0]}
                              </span>
                            </div>
                            <p style={{ color: "#171717", margin: "0" }}>
                              {user?.email}
                            </p>
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                            onClick={handleLogout}
                          >
                            <img src="/icons/logout.svg" alt="" />
                            <p style={{ color: "#171717", margin: "0" }}>
                              Logout
                            </p>
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className={styles.cta_div}>
                <Link href={"/login"}>
                  <button className={styles.login}>Log In</button>
                </Link>
                <Link href={"/signup"}>
                  <button className={styles.signup}>Sign Up</button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div
          className={
            tools
              ? `${styles.tools_container} ${styles.show_tools}`
              : styles.tools_container
          }
          onMouseEnter={() => setTools(true)}
          onMouseLeave={() => {
            if (width > 835) setTools(false);
          }}
          onClick={() => setTools(false)}
        >
          <div
            style={{
              maxWidth: "1440px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              margin: "0 auto",
            }}
          >
            <div className={styles.tools_article}>
              <h3>Convert To PDF</h3>
              <div>
                <Link href={"/convert/wordtopdf"}>
                  <img src="/icons/word-to-pdf.svg" alt="" />
                  <p>Word to PDF</p>
                </Link>
              </div>
              <div>
                <Link href={"/convert/exceltopdf"}>
                  <img src="/icons/excel-to-pdf.svg" alt="" />
                  <p>Excel to PDF</p>
                </Link>
              </div>
              <div>
                <Link href={"/convert/ppttopdf"}>
                  <img src="/icons/ppt-to-pdf.svg" alt="" />
                  <p>PowerPoint to PDF</p>
                </Link>
              </div>
              <div>
                <Link href={"/convert/ebookstopdf"}>
                  <img src="/icons/ebooks-to-pdf.svg" alt="" />
                  <p>eBooks to PDF</p>
                </Link>
              </div>
              <div>
                <Link href={"/convert/iworktopdf"}>
                  <img src="/icons/iwork-to-pdf.svg" alt="" />
                  <p>iWork to PDF</p>
                </Link>
              </div>
            </div>
            <div className={styles.tools_article}>
              <h3>Convert from PDF</h3>
              <div>
                <Link href={"/convert/pdftoword"}>
                  <img src="/icons/pdf-to-word.svg" alt="" />
                  <p>PDF to Word</p>
                </Link>
              </div>
              <div>
                <Link href={"/convert/pdftoexcel"}>
                  <img src="/icons/pdf-to-excel.svg" alt="" />
                  <p>PDF to Excel</p>
                </Link>
              </div>
              <div>
                <Link href={"/convert/pdftoppt"}>
                  <img src="/icons/pdf-to-ppt.svg" alt="" />
                  <p>PDF to PowerPoint</p>
                </Link>
              </div>
            </div>
            <div className={styles.tools_article}>
              <h3>Convert to Image</h3>
              <div>
                <Link href={"/convert/pdftopng"}>
                  <img src="/icons/pdf-to-img.svg" alt="" />
                  <p>PDF to PNG</p>
                </Link>
              </div>
              <div>
                <Link href={"/convert/pdftojpg"}>
                  <img src="/icons/pdf-to-img.svg" alt="" />
                  <p>PDF to JPG</p>
                </Link>
              </div>
            </div>
            <div className={styles.tools_article}>
              <h3>Convert from Image</h3>
              <div>
                <Link href={"/convert/pngtopdf"}>
                  <img src="/icons/img-to-pdf.svg" alt="" />
                  <p>PNG to PDF</p>
                </Link>
              </div>
              <div>
                <Link href={"/convert/jpgtopdf"}>
                  <img src="/icons/img-to-pdf.svg" alt="" />
                  <p>JPG to PDF</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ height: "80px", backgroundColor: "#f9f9f9" }}></div>
    </>
  );
};

export default Navbar;
