import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Testimonial from "@components/testimonial/Testimonial";
import HomeCard1 from "@components/HomeCard1/HomeCard1";
import HomeCard2 from "@components/HomeCard2/HomeCard2";

export default function Home() {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window?.innerWidth);
    }
  }, []);
  return (
    <div>
      {/* Ad Section */}
      <section className={styles.ad_section} id="advertisement">
        <div
          className={`${styles.ad_div} d-flex justify-content-center align-items-center mx-auto`}
        >
          Advertisement
        </div>
      </section>
      {/* Header */}
      <header className="bg-light h-35 position-relative">
        <div className={`container ${styles.heading_container}`}>
          <h1>File Converter</h1>
          <p className={styles.heading_container_para1}>
            Convert your files to any format
          </p>
          <p className={styles.heading_container_para2}>
            <span>We have converted </span>
            <b className="cl-537895">1,545,407,398</b>
            <span> with a total size of </span>
            <b className="cl-537895">30,750</b>
            <span> TB</span>
          </p>
          <h2 className="text-center fw-bold">Converter Tools</h2>
        </div>
        <div className={styles.bg_div}></div>
      </header>
      {/* <div className="row d-flex justify-content-center align-items-center"> */}
      <div
        className={`row ${styles.tool_cards_container}`}
        style={{ gap: "10px", maxWidth: "fit-content" }}
      >
        {[
          {
            title: "Convert To PDF",
            img: "icons/convert-to-pdf.svg",
            para: "Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted document is almost 100% accurate.",
            link: "#converttopdf",
          },
          {
            title: "Convert From PDF",
            img: "icons/convert-from-pdf.svg",
            para: "Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted document is almost 100% accurate.",
            link: "#convertfrompdf",
          },
          {
            title: "Convert To Image",
            img: "icons/convert-to-img.svg",
            para: "Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted document is almost 100% accurate.",
            link: "#converttoimg",
          },
          {
            title: "Convert From Image",
            img: "icons/convert-from-img.svg",
            para: "Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted document is almost 100% accurate.",
            link: "#convertfromimg",
          },
        ].map((item, i) => {
          return <HomeCard1 {...item} key={i} />;
        })}
      </div>
      {/* </div> */}

      {/* Tools */}
      <div
        className={`container ${styles.on_mobile_hide_tools}`}
        id="toolsToConvert"
      >
        {width > 520 && (
          <div id="converttopdf" style={{ height: "80px" }}></div>
        )}
        <div className="row d-flex">
          <h2
            className="text-center fw-bold"
            style={{ marginBottom: "15px", fontSize: "32px", color: "#3A3A3A" }}
          >
            Convert To PDF
          </h2>
          <div
            className={`row ${styles.tool_cards_container}`}
            style={{
              gap: "15px",
              maxWidth: "850px !important",
            }}
          >
            {[
              {
                title: "Word to PDF",
                para: "Quick and easy way to convert your Word to PDF file",
                icon: "icons/word-to-pdf.svg",
                bgColor: "#F9FDFF",
                borderColor: "#2980B9",
                route: "/convert/wordtopdf",
              },
              {
                title: "Excel to PDF",
                para: "Quick and easy way to convert your Excel to PDF file",
                icon: "icons/excel-to-pdf.svg",
                bgColor: "#F6FFFA",
                borderColor: "#27AE60",
                route: "/convert/exceltopdf",
              },
              {
                title: "PowerPoint to PDF",
                para: "Quick and easy way to convert your PowerPoint to PDF file",
                icon: "icons/ppt-to-pdf.svg",
                bgColor: "#FFF9F5",
                borderColor: "#D35400",
                route: "/convert/ppttopdf",
              },
              {
                title: "eBooks to PDF",
                para: "Quick and easy way to convert your eBooks to PDF file",
                icon: "icons/ebooks-to-pdf.svg",
                bgColor: "#FFEDDE",
                borderColor: "#FF8D29",
                route: "/convert/ebookstopdf",
              },
              {
                title: "iWork to PDF",
                para: "Quick and easy way to convert your iWork to PDF file",
                icon: "icons/iwork-to-pdf.svg",
                bgColor: "#F9F9F9",
                borderColor: "#223D40",
                route: "/convert/iworktopdf",
              },
            ].map((item, i) => {
              return <HomeCard2 key={i} {...item} />;
            })}
          </div>
        </div>
        {width > 520 && (
          <div id="convertfrompdf" style={{ height: "80px" }}></div>
        )}{" "}
        <div className="row d-flex justify-content-around" id="">
          <h2
            className="text-center fw-bold"
            style={{ marginBottom: "15px", fontSize: "32px", color: "#3A3A3A" }}
          >
            Convert From PDF
          </h2>
          <div
            className={`row ${styles.tool_cards_container}`}
            style={{ gap: "15px" }}
          >
            {[
              {
                title: "PDF To Word",
                para: "Quick and easy way to convert your PDF To Word file",
                icon: "icons/pdf-to-word.svg",
                bgColor: "#F9FDFF",
                borderColor: "#2980B9",
                route: "/convert/pdftoword",
              },
              {
                title: "PDF To Excel",
                para: "Quick and easy way to convert your PDF To Excel file",
                icon: "icons/pdf-to-excel.svg",
                bgColor: "#F6FFFA",
                borderColor: "#27AE60",
                route: "/convert/pdftoexcel",
              },
              {
                title: "PDF To PowerPoint",
                para: "Quick and easy way to convert your Power PDF To PowerPoint file",
                icon: "icons/ppt-to-pdf.svg",
                bgColor: "#FFF9F5",
                borderColor: "#D35400",
                route: "/convert/pdftoppt",
              },
            ].map((item, i) => {
              return <HomeCard2 key={i} {...item} />;
            })}
          </div>
        </div>
        {width > 520 && (
          <div id="converttoimg" style={{ height: "80px" }}></div>
        )}{" "}
        <div className="row d-flex justify-content-around" id="">
          <h2
            id="converttoimage"
            className="text-center fw-bold"
            style={{ marginBottom: "15px", fontSize: "32px", color: "#3A3A3A" }}
          >
            Convert To Image
          </h2>
          <div
            className={`row ${styles.tool_cards_container}`}
            style={{ gap: "15px" }}
          >
            {[
              {
                title: "PDF To JPG",
                para: "Quick and easy way to convert your PDF To JPG file",
                icon: "icons/pdf-to-img.svg",
                bgColor: "#FCF6FF",
                borderColor: "#9B59B6",
                route: "/convert/pdftojpg",
              },
              {
                title: "PDF To PNG",
                para: "Quick and easy way to convert your PDF To PNG file",
                icon: "icons/pdf-to-img.svg",
                bgColor: "#FCF6FF",
                borderColor: "#9B59B6",
                route: "/convert/pdftopng",
              },
            ].map((item, i) => {
              return <HomeCard2 key={i} {...item} />;
            })}
          </div>
        </div>
        {width > 520 && (
          <div id="convertfromimg" style={{ height: "80px" }}></div>
        )}{" "}
        <div className="row d-flex justify-content-around" id="">
          <h2
            id="convertfromimage"
            className="text-center fw-bold"
            style={{ marginBottom: "15px", fontSize: "32px", color: "#3A3A3A" }}
          >
            Convert From Image
          </h2>
          <div
            className={`row ${styles.tool_cards_container}`}
            style={{ gap: "15px", marginBottom: "70px" }}
          >
            {[
              {
                title: "JPG To PDF",
                para: "Quick and easy way to convert your JPG to PDF file",
                icon: "icons/img-to-pdf.svg",
                bgColor: "#FCF6FF",
                borderColor: "#9B59B6",
                route: "/convert/jpgtopdf",
              },
              {
                title: "PNG To PDF",
                para: "Quick and easy way to convert your PNG to PDF file",
                icon: "icons/img-to-pdf.svg",
                bgColor: "#FCF6FF",
                borderColor: "#9B59B6",
                route: "/convert/pngtopdf",
              },
            ].map((item, i) => {
              return <HomeCard2 key={i} {...item} />;
            })}
          </div>
        </div>
      </div>
      {/* Mobile Tools */}
      <div
        className={`${styles.mobile_tools_container} ${styles.on_mobile_show_tools}`}
      >
        {width < 520 && (
          <div id="converttopdf" style={{ height: "80px" }}></div>
        )}
        <div className={styles.mobile_tools_article} id="">
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
          <div id={width < 520 ? "convertfrompdf" : ""}>
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
        <div className={styles.mobile_tools_article}>
          <h3>Convert from PDF</h3>
          <div>
            <Link href={"/convert/pdftoword"}>
              <img src="/icons/pdf-to-word.svg" alt="" />
              <p>PDF to Word</p>
            </Link>
          </div>
          <div id={width < 520 ? "converttoimg" : ""}>
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
        <div className={styles.mobile_tools_article}>
          <h3>Convert to Image</h3>
          <div id={width < 520 ? "convertfromimg" : ""}>
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
        <div className={styles.mobile_tools_article}>
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
      {/* Why Choose Us */}
      {/* <svg viewBox="0 60 500 50" className="rotate-x-180">
        <path
          d="M0,80 C150,150 300,30 500,100 L500,00 L0,0 Z"
          style={{ stroke: "none", fill: "#f8f9fa" }}
        ></path>
      </svg> */}
      <section className="bg-light">
        <div className={`container ${styles.why_choose_us}`}>
          <div className="row text-center bg-light">
            <h2 className="fw-bold">Why Choose Small Convertrer Tools</h2>
            {[
              {
                icon: "icons/bulb.svg",
                title: "Quick and easy conversion",
                para: "With just a simple drag-and-drop, you can convert text or image to any format within seconds. There’s no file size limit nor even the need to register to use our service.",
              },
              {
                icon: "icons/badge.svg",
                title: "We keep your files safe!",
                para: "We care about privacy. All files will be deleted from our servers forever after one hour. To know more about how much we care, read our privacy policy.",
              },
              {
                icon: "icons/thumb.svg",
                title: "All platforms are welcome!",
                para: "Our small converter works on all computers - no matter if you use Mac, Windows or Linux.",
              },
              {
                icon: "icons/lock.svg",
                title: "PDF to image in the best quality",
                para: "PDF to image conversion is hard. To bring you the very best quality to convert your PDF files, we have partnered with Solid Documents - the best solution provider on the market.",
              },
              {
                icon: "icons/converter.svg",
                title: "Convert a PDF to a DOC in seconds",
                para: "It is seriously ridiculously easy with our tool to convert files online. Try it and you will love it.",
              },
              {
                icon: "icons/cloud.svg",
                title: "Magic conversion in the cloud",
                para: "We have many servers in the cloud which do nothing else than converting PDF to Image files or text. So, lean back and let them do the work.",
              },
            ].map((item, i) => {
              return (
                <div
                  className={`col-md-4 col-sm-6 ${styles.why_choose_us_card}`}
                  key={i}
                >
                  <img src={item.icon} alt="icon" srcSet="" />
                  <p>{item.title}</p>
                  <p>{item.para}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <svg
        viewBox="0 60 500 50"
        className={`${styles.why_choose_us_svg} rotate-y-180`}
      >
        <path
          d="M0,80 C150,150 300,30 500,100 L500,00 L0,0 Z"
          style={{ stroke: "none", fill: "#f8f9fa" }}
        ></path>
      </svg>
      {/* Reviews and Ratings */}
      <div className={`container ${styles.rating_and_reviews}`}>
        <h2 className="text-center">Ratings and Reviews</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, illo
          hic. Aperiam voluptatem{" "}
        </p>
        <p className="text-center">
          <b className="fw-bold">4.9</b> out of 5 &nbsp; — &nbsp;{" "}
          <small>23 Ratings</small>
        </p>
        <Testimonial />
      </div>
      {/* Newsletter */}
      <div className={`container text-center ${styles.newsletter_container}`}>
        <img src="icons/open-email.svg" alt="" srcSet="" />
        <small className="d-block">
          Subscribe to our newsletter and stay updated
        </small>
        <form action="" method="post">
          <div className={`${styles.newsletter_input} m-auto`}>
            <input
              type="email"
              name="email"
              className="form-control w-50 m-auto"
              placeholder="Email"
              style={{ outline: "none" }}
            />
            <img src="icons/subscribe-btn.svg" alt="" srcSet="" />
          </div>
        </form>
        <img src="icons/newsletter.svg" alt="" srcSet="" />
      </div>
    </div>
  );
}
